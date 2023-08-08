using Travellers.Models;

namespace Travellers.Interface
{
    
        public interface IBookingService 
        {
         
            IEnumerable<Booking> GetBookings();
        public Booking CreateBooking(Booking bookings);

        Booking GetBookingById(int booking_id);




    }
}

