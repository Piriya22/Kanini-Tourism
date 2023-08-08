using Requests.Models.DTO;
using Requests.Models;
using Microsoft.AspNetCore.Mvc;

namespace Requests.Interface
{
    public interface IAgent
    {
        
            public IEnumerable<TravelAgents> GetTravelAgents();
            public TravelAgents GetTravelAgentById(int agentId);
            Task<TravelAgents> CreateTravelAgent([FromForm] TravelAgents agent, IFormFile imageFile);
        
            Task<TravelAgents> UpdateTravelAgent(int agentId, TravelAgents agent);
            public TravelAgents DeleteTravelAgent(int agentId);
            Task<AgentDTO> UpdateStatus(AgentDTO status);
            public Task<List<TravelAgents>> GetRequestedAgents();
            public Task<List<TravelAgents>> GetAcceptedAgents();
            Task<AgentDTO> Decline(AgentDTO status);
    }
    }

