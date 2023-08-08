using Requests.Models.DTO;
using Requests.Models;
using static Requests.Service.AgentService;
using Requests.Context;
using Requests.Interface;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;

namespace Requests.Service
{
        public class AgentService : IAgent
        {
            private readonly AdminContext _context;
            private readonly IWebHostEnvironment _webHostEnvironment;

            public AgentService(AdminContext context, IWebHostEnvironment webHostEnvironment)
            {
                _context = context;
                _webHostEnvironment = webHostEnvironment;
            }

            public IEnumerable<TravelAgents> GetTravelAgents()
            {
                return _context.TravelAgents.ToList();
            }

            public TravelAgents GetTravelAgentById(int agentId)
            {
                return _context.TravelAgents.FirstOrDefault(a => a.agent_id == agentId);
            }

        public async Task<TravelAgents> CreateTravelAgent([FromForm] TravelAgents agent, IFormFile imageFile)
        {
            if (imageFile == null || imageFile.Length == 0)
            {
                throw new ArgumentException("Invalid file");
            }

            var uploadsFolder = Path.Combine(_webHostEnvironment.WebRootPath, "uploads");
            var fileName = Guid.NewGuid().ToString() + Path.GetExtension(imageFile.FileName);
            var filePath = Path.Combine(uploadsFolder, fileName);

            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await imageFile.CopyToAsync(stream);
            }
            agent.Status = "Requested";

            agent.agent_image = fileName;


            _context.TravelAgents.Add(agent);
            await _context.SaveChangesAsync();

            return agent;
        }

            public async Task<TravelAgents> UpdateTravelAgent(int agentId, TravelAgents agent)
            {
                var existingAgent = await _context.TravelAgents.FindAsync(agentId);
                if (existingAgent == null)
                {
                    return null;
                }

                existingAgent.agent_name = agent.agent_name;
                existingAgent.agent_password = agent.agent_password;
                existingAgent.agent_email = agent.agent_email;
                await _context.SaveChangesAsync();

                return existingAgent;
            }

            public TravelAgents DeleteTravelAgent(int agentId)
            {
                var agent = _context.TravelAgents.FirstOrDefault(a => a.agent_id == agentId);
                if (agent != null)
                {
                    _context.TravelAgents.Remove(agent);
                    _context.SaveChanges();
                    return agent;
                }
                return null;
            }

        public async Task<AgentDTO> UpdateStatus(AgentDTO status)
        {
            var agency = await _context.TravelAgents.FirstOrDefaultAsync(s => s.agent_id == status.id);

            if (agency != null && agency.Status == "Requested")
            {
                agency.Status = "Accepted";
                await _context.SaveChangesAsync();
                return status;
            }

            return null;
        }

        public async Task<List<TravelAgents>> GetRequestedAgents()
            {
                var requestedAgents = await _context.TravelAgents.Where(agent => agent.Status == "Requested").ToListAsync();
                if (requestedAgents != null)
                {
                    return requestedAgents;
                }
                return null;
            }

            public async Task<List<TravelAgents>> GetAcceptedAgents()
            {
                var acceptedAgents = await _context.TravelAgents.Where(agent => agent.Status == "Accepted").ToListAsync();
                if (acceptedAgents != null)
                {
                    return acceptedAgents;
                }
                return null;
            }

        public async Task<AgentDTO> Decline(AgentDTO status)
        {
            var agency = await _context.TravelAgents.FirstOrDefaultAsync(s => s.agent_id == status.id);
            if (agency != null)
            {
                if (agency.Status == "Requested")
                {
                    agency.Status = "Declined";
                    await _context.SaveChangesAsync();
                    return status;
                }
                return status;
            }
            return null;
        }
    }
    }

