using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Travellers.Models
{
    public class Payments
    {
        [Key] 
        public int payment_id { get; set; }
        [ForeignKey("Booking")]
        public int booking_id { get; set; }
       
        public Traveller? traveller { get; set; }

        public string traveller_name { get; set; }  

        public int  card_number { get; set; }

        public int month { get; set; }

        public int year { get; set; }

        public int cvv_number { get; set;}

        public int price { get; set; }

        public Booking? Bookings { get; set; }
    }
}
