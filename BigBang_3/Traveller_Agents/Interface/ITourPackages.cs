using Microsoft.AspNetCore.Mvc;
using Traveller_Agents.Models;

namespace Traveller_Agents.Interface
{
    public interface ITourPackages
    {

        IEnumerable<TourPackages> GetPackages();
        Task<TourPackages> PostPackage(TourPackages tour, IFormFile imageFile);

        public Task<ICollection<TourPackages>> GetTourPackageByTourId(int tourId);

        public Task<TourPackages> GetTourpackageByid(int id);

    }
    
}
