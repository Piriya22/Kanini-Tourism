using Microsoft.AspNetCore.Mvc;
using Travellers.Models;
using System.Threading.Tasks;

namespace Travellers.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TravellerController : ControllerBase
    {
        private readonly ITravellerService _travellerService;

        public TravellerController(ITravellerService travellerService)
        {
            _travellerService = travellerService;
        }

        // ... your controller actions ...
    


    // GET: api/Traveller
    [HttpGet]
        public async Task<IActionResult> GetTravellers()
        {
            var travellers = await _travellerService.GetAllTravellers();
            return Ok(travellers);
        }

        // GET: api/Traveller/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetTraveller(int id)
        {
            var traveller = await _travellerService.GetTravellerById(id);
            if (traveller == null)
            {
                return NotFound();
            }
            return Ok(traveller);
        }

        // POST: api/Traveller
        [HttpPost]
        public async Task<IActionResult> PostTraveller([FromBody] Traveller traveller)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            await _travellerService.AddTraveller(traveller);
            return CreatedAtAction(nameof(GetTraveller), new { id = traveller.traveller_id }, traveller);
        }

        // PUT: api/Traveller/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTraveller(int id, [FromBody] Traveller traveller)
        {
            if (id != traveller.traveller_id || !ModelState.IsValid)
            {
                return BadRequest();
            }

            var existingTraveller = await _travellerService.GetTravellerById(id);
            if (existingTraveller == null)
            {
                return NotFound();
            }

            await _travellerService.UpdateTraveller(traveller);
            return NoContent();
        }

        // DELETE: api/Traveller/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTraveller(int id)
        {
            var traveller = await _travellerService.GetTravellerById(id);
            if (traveller == null)
            {
                return NotFound();
            }

            await _travellerService.DeleteTraveller(id);
            return NoContent();
        }
    }
}
