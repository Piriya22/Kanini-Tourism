using System.ComponentModel.DataAnnotations;

namespace Requests.Models
{
    public class TravelAgents
    {
        [Key]
        public int agent_id { get; set; }
        [StringLength(100, ErrorMessage = "agent_name must not exceed 100 characters.")]
        public string? agent_name { get; set; }
        public string? agent_image { get; set; }
        public string? agent_email { get; set; }

        [StringLength(100, MinimumLength = 8, ErrorMessage = "agent_password must be at least 8 characters long.")]
        [RegularExpression(@"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$",
        ErrorMessage = "agent_password must contain at least one uppercase letter, one lowercase letter, and one special character.")]
        public string? agent_password { get; set; }
        public long? agent_phonenumber { get; set; }        
        public string? Status { get; set; }
    }
}
