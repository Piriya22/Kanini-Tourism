using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Requests.Models.DTO;
using Requests.Models;
using static Requests.Service.AgentService;
using Requests.Interface;

namespace Requests.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AgentsController : ControllerBase
    {
        private readonly IAgent _agentRepo;

        public AgentsController(IAgent agentRepo)
        {
            _agentRepo = agentRepo;
        }

        [HttpGet]
        public ActionResult<IEnumerable<TravelAgents>> GetTravelAgents()
        {
            var agents = _agentRepo.GetTravelAgents();
            return Ok(agents);
        }

        [HttpGet("{id}")]
        public ActionResult<TravelAgents> GetTravelAgent(int id)
        {
            var agent = _agentRepo.GetTravelAgentById(id);
            if (agent == null)
            {
                return NotFound();
            }
            return Ok(agent);
        }

        [HttpPost]
        public async Task<ActionResult<TravelAgents>> Post([FromForm] TravelAgents agent, IFormFile imageFile)
        {

            try
            {
                var createdCourse = await _agentRepo.CreateTravelAgent(agent, imageFile);
                return Created("Get", createdCourse);
            }
            catch (ArgumentException ex)
            {
                ModelState.AddModelError("", ex.Message);
                return BadRequest(ModelState);
            }
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<TravelAgents>> PutTravelAgent(int id, TravelAgents agent)
        {
            var updatedAgent = await _agentRepo.UpdateTravelAgent(id, agent);
            if (updatedAgent == null)
            {
                return NotFound();
            }
            return Ok(updatedAgent);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteTravelAgent(int id)
        {
            var deletedAgent = _agentRepo.DeleteTravelAgent(id);
            if (deletedAgent == null)
            {
                return NotFound();
            }
            return NoContent();
        }

        [HttpPut("UpdateStatus")]
        public async Task<ActionResult<AgentDTO>> UpdateStatus(AgentDTO status)
        {
            var result = await _agentRepo.UpdateStatus(status);
            if (result == null)
            {
                return NotFound();
            }
            return Ok(result);
        }

        [HttpGet("RequestedAgents")]
        public async Task<ActionResult<List<TravelAgents>>> GetRequestedAgents()
        {
            var result = await _agentRepo.GetRequestedAgents();
            if (result == null)
            {
                return NotFound();
            }
            return Ok(result);
        }

        [HttpGet("AcceptedAgents")]
        public async Task<ActionResult<List<TravelAgents>>> GetAcceptedAgents()
        {
            var result = await _agentRepo.GetAcceptedAgents();
            if (result == null)
            {
                return NotFound();
            }
            return Ok(result);
        }

        [HttpPut("DeclineAgents")]
        public async Task<ActionResult<List<AgentDTO>>> UpdateDeclineStatus(AgentDTO status)
        {
            var result = await _agentRepo.Decline(status);
            if (result == null)
            {
                return NotFound();
            }
            return Ok(result);
        }
    }
}

