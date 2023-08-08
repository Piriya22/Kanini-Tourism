using System.ComponentModel.DataAnnotations;

namespace Requests.Models
{
    public class ImageGallery
    {
        [Key]
        public int tour_id { get; set; }
        public string? tour_name { get; set; }
        public string? location_image { get; set; }
        public string? description { get; set; }
    }
}
