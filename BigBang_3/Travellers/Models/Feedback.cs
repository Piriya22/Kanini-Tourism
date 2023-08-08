using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Travellers.Models
{
    public class Feedback
    {
        [Key]

        public int feedback_id { get; set; }
        public int traveller_id { get; set; }
        [ForeignKey("traveller_id")]

        public Traveller? traveller { get; set; }
        public int package_id { get; set; }

        public int rating { get; set; }

        public string comments { get; set; }

    }
}
