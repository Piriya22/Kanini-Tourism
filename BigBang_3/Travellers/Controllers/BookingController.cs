using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Travellers.Models;
using Travellers.Interface;
using Travellers.Service;

namespace Travellers.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookingController : ControllerBase
    {
            private readonly IBookingService _bookingService;

            public BookingController(IBookingService bookingService)
            {
                _bookingService = bookingService;
            }



        [HttpGet]
        public ActionResult<IEnumerable<Booking>> GetBookings()
        {
            try
            {
                var bookings = _bookingService.GetBookings();
                return Ok(_bookingService.GetBookings);
            }
            catch (Exception ex)
            {
                // Log the exception for debugging purposes.
                // You may want to implement a proper logging mechanism here.

                return StatusCode(500, "An error occurred while processing your request.");
            }
        }

        [HttpGet("{booking_id}")]
        public ActionResult<Booking> GetBookingById(int booking_id)
        {
            try
            {
                var booking = _bookingService.GetBookingById(booking_id);

                if (booking == null)
                {
                    return NotFound(); // Return a 404 response if the booking is not found
                }

                return Ok(booking);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public ActionResult<Booking> PostBooking(Booking booking)
        {
            return _bookingService.CreateBooking(booking);
        }




    }
}

