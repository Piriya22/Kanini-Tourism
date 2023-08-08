using System.ComponentModel.DataAnnotations;

namespace Travellers.Models
{
    public class Traveller
    {
        [Key]

        public int traveller_id { get; set; }
        [StringLength(100, ErrorMessage = "traveller_agent_name must not exceed 100 characters.")]

        public string? traveller_name { get; set; }
        

        public string? traveller_email { get; set; }

        [StringLength(100, MinimumLength = 8, ErrorMessage = "traveller_agent_password must be at least 8 characters long.")]
        [RegularExpression(@"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$",
        ErrorMessage = "traveller_agent_password must contain at least one uppercase letter, one lowercase letter, and one special character.")]
        public string? traveller_password { get; set; }  

        public long phone_number { get; set; }

        public ICollection<Booking>? Bookings { get; set; }

    }
}

