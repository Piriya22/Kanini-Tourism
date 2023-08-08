using System.ComponentModel.DataAnnotations;

namespace Traveller_Agents.Models
{
    public class TourPackages
    {
        [Key] 
        public int package_id { get; set; }
        public int tour_id { get; set; }    
        public int traveller_id { get; set; }
        public string package_name { get; set; }
        public string food_plan { get; set;}
        public string hotel_nearby { get; set; }
        public string spots_nearby { get;set; }  
        public string itinerary { get; set; }
        public string? tour_image { get; set; }
        public int price { get; set; }
        public string vacation_type { get; set; }
        public string duration { get; set;}

        public ICollection<Spot>? spot { get; set; }

    }
}
