using BigBang_3.Models;
using Microsoft.EntityFrameworkCore;

namespace BigBang_3.Context
{
    public class AdminContext : DbContext
    {
        public DbSet<Admin> admin { get; set; }
        public AdminContext(DbContextOptions<AdminContext> options) : base(options) { }
    }
}
