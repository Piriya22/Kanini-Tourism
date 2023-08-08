using Travellers.Models;

namespace Travellers.Interface
{
    public interface IPaymentsService
    {
        Task<IEnumerable<Payments>> GetAllPayments();
        Task<Payments> GetPaymentById(int paymentId);
        Task<Payments> PostPayment(Payments payment);
        Task UpdatePayment(int paymentId, Payments payment);
        Task DeletePayment(int paymentId);
    }
}
