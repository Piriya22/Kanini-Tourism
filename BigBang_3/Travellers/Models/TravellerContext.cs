using Microsoft.EntityFrameworkCore;

namespace Travellers.Models
{
    public class TravellerContext : DbContext
    {
        public DbSet<Traveller> traveller { get; set; }

        public DbSet<Feedback> feedback { get; set; }

        public DbSet<Payments> payments { get; set; }

        public DbSet<Booking> bookings { get; set; }
        public TravellerContext(DbContextOptions<TravellerContext> options) : base(options) { }
    }
}
