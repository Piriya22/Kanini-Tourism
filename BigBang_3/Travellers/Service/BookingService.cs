using static Travellers.Interface.IBookingService;
using Travellers.Models;
using Travellers.Interface;
using Microsoft.EntityFrameworkCore;

namespace Travellers.Service
{
    public class BookingService : IBookingService
    {

        private readonly TravellerContext _context;

        public BookingService(TravellerContext context)
        {
            _context = context;
        }



        public IEnumerable<Booking> GetBookings()
        {
            return _context.bookings.ToList();
        }

        public Booking CreateBooking(Booking bookings)
        {
            bookings.IsConfirmed = ConfirmationStatus.Requested;
            _context.bookings.Add(bookings);
            _context.SaveChanges();
            return bookings;
        }
        public Booking GetBookingById(int id)
        {
            return _context.bookings.FirstOrDefault(b => b.booking_id == id);
        }





    }
}

