using static Travellers.Service.PaymentService;
using Travellers.Models;
using Microsoft.EntityFrameworkCore;
using Travellers.Interface;

namespace Travellers.Service
{
    public class PaymentService
    {
        public class PaymentsService : IPaymentsService
        {
            private readonly TravellerContext _context;

            public PaymentsService(TravellerContext context)
            {
                _context = context;
            }

            public async Task<IEnumerable<Payments>> GetAllPayments()
            {
                return await _context.payments.ToListAsync();
            }

            public async Task<Payments> GetPaymentById(int paymentId)
            {
                return await _context.payments.FindAsync(paymentId);
            }

            public async Task<Payments> PostPayment(Payments payment)
            {
               
                Booking associatedBooking = _context.bookings.Find(payment.booking_id);

                if (associatedBooking != null)
                {
                    decimal totalPrice = payment.price * associatedBooking.traveller_count;
                    payment.price = (int)totalPrice;

                    _context.payments.Add(payment);
                    _context.SaveChanges();

                    associatedBooking.IsConfirmed = ConfirmationStatus.Confirmed;
                    _context.SaveChanges();
                }

                return payment;
            }

            public async Task UpdatePayment(int paymentId, Payments payment)
            {
                var existingPayment = await _context.payments.FindAsync(paymentId);
                if (existingPayment == null)
                {
                    return;
                }

                existingPayment.traveller_name = payment.traveller_name;
                existingPayment.card_number = payment.card_number;
                existingPayment.month = payment.month;
                existingPayment.year = payment.year;
                existingPayment.cvv_number = payment.cvv_number;

                await _context.SaveChangesAsync();
            }

            public async Task DeletePayment(int paymentId)
            {
                var payment = await _context.payments.FindAsync(paymentId);
                if (payment == null)
                {
                    return;
                }

                _context.payments.Remove(payment);
                await _context.SaveChangesAsync();
            }
        }
    }
}
