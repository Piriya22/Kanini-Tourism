using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Traveller_Agents.Context;
using Traveller_Agents.Interface;
using Traveller_Agents.Models;

namespace Traveller_Agents.Service
{
    public class TourPackagesService : ITourPackages
    {
        private readonly AgentsContext _context;
        private readonly IWebHostEnvironment _webHostEnvironment;

        public TourPackagesService(AgentsContext context, IWebHostEnvironment webHostEnvironment)
        {
            _context = context;
            _webHostEnvironment = webHostEnvironment;
        }

        public IEnumerable<TourPackages> GetPackages()
        {
            try
            {
                return _context.Packages.ToList();
            }
            catch (Exception ex)
            {
                
                throw new Exception("Error while retrieving tour packages from the database.", ex);
            }
        }

        public async Task<TourPackages> PostPackage([FromForm] TourPackages tour, IFormFile imageFile)
        {
            try
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

                tour.tour_image = fileName;
                _context.Packages.Add(tour);
                await _context.SaveChangesAsync();

                return tour;
            }
            catch (ArgumentException)
            {
                throw; 
            }
            catch (Exception ex)
            {
                
                throw new Exception("Error while saving the tour package to the database.", ex);
            }
        }

        public async Task<ICollection<TourPackages>> GetTourPackageByTourId(int tour_id)
        {
            return await _context.Packages
                                         .Include(t => t.spot)
                                         .Where(t => t.tour_id == tour_id).ToListAsync();
        }

        public async Task<TourPackages> GetTourpackageByid(int id)
        {
            return await _context.Packages.Include(t => t.spot).FirstOrDefaultAsync(t => t.package_id == id);
        }
    }
}

