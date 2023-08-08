using Microsoft.EntityFrameworkCore;
using Traveller_Agents.Models;

namespace Traveller_Agents.Context
{
    public class AgentsContext : DbContext
    {
        public DbSet<TourPackages> Packages { get; set; }

        public DbSet<Spot> Spots { get; set; }
        public AgentsContext(DbContextOptions<AgentsContext> options) : base(options) { }
    }
}
