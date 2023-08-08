using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Travellers.Models
{
    public enum ConfirmationStatus
    {
        [Display(Name = "Requested")]
        Requested,

        [Display(Name = "Confirmed")]
        Confirmed
    }

    public class Booking
    {
        [Key]
        public int booking_id { get; set; }

        [Required]
        public int traveller_id { get; set; }

        [ForeignKey("traveller_id")] // Define the foreign key relationship
        public Traveller? traveller { get; set; } // Navigation property to Traveller

        public int package_id { get; set; }
        public string email { get; set; }
        public long phone_number { get; set; }
        public string residence { get; set; }
        public int traveller_count { get; set; }
        public string vacation_type { get; set; }

        public ConfirmationStatus IsConfirmed { get; set; }

        public DateTime BookingDate { get; set; }

        public Booking()
        {
            IsConfirmed = ConfirmationStatus.Requested;
            BookingDate = DateTime.Now;
        }
    }
}
