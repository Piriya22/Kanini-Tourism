using Travellers.Models;

public interface ITravellerService
{
    Task<IEnumerable<Traveller>> GetAllTravellers();
    Task<Traveller> GetTravellerById(int travellerId);
    Task AddTraveller(Traveller traveller);
    Task UpdateTraveller(Traveller traveller);
    Task DeleteTraveller(int travellerId);
}