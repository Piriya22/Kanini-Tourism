using Microsoft.EntityFrameworkCore;
using Requests.Models;
using System.Collections.Generic;

namespace Requests.Context
{
    public class AdminContext : DbContext
    {
        public DbSet<Admin> Admins { get; set; }

        public DbSet<TravelAgents> TravelAgents { get; set; }

        public DbSet<ImageGallery> ImageGallery { get; set; }
        public AdminContext(DbContextOptions<AdminContext> options) : base(options) { }
    }
}
