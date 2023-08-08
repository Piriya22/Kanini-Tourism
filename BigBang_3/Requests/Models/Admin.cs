using System.ComponentModel.DataAnnotations;

namespace Requests.Models
{
    public class Admin
    {
        [Key]
        public int admin_id { get; set; }
        [StringLength(100, ErrorMessage = "traveller_agent_name must not exceed 100 characters.")]


        public string? admin_name { get; set; }
        [StringLength(100, MinimumLength = 8, ErrorMessage = "traveller_agent_password must be at least 8 characters long.")]
        [RegularExpression(@"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$",
        ErrorMessage = "traveller_agent_password must contain at least one uppercase letter, one lowercase letter, and one special character.")]


        public string? admin_password { get; set; }
    }
}
