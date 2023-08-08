using Microsoft.EntityFrameworkCore;
using Travellers.Models;

namespace Travellers.Service
{
    public class TravellerService : ITravellerService
    {
        private readonly TravellerContext _context;

        public TravellerService(TravellerContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Traveller>> GetAllTravellers()
        {
            return await _context.traveller.ToListAsync();
        }

        public async Task<Traveller> GetTravellerById(int travellerId)
        {
            return await _context.traveller.FindAsync(travellerId);
        }

        public async Task AddTraveller(Traveller traveller)
        {
            _context.traveller.Add(traveller);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateTraveller(Traveller traveller)
        {
            _context.traveller.Update(traveller);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteTraveller(int travellerId)
        {
            var traveller = await _context.traveller.FindAsync(travellerId);
            if (traveller != null)
            {
                _context.traveller.Remove(traveller);
                await _context.SaveChangesAsync();
            }
        }
    }

}

