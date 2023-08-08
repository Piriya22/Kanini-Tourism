using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Travellers.Interface;
using Travellers.Models;

namespace Travellers.Controllers
{
    [Route("api/payments")]
    [ApiController]
    public class PaymentsController : ControllerBase
    {
        private readonly IPaymentsService _paymentsService;

        public PaymentsController(IPaymentsService paymentsService)
        {
            _paymentsService = paymentsService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Payments>>> GetPayments()
        {
            var payments = await _paymentsService.GetAllPayments();
            return Ok(payments);
        }

        [HttpGet("{paymentId}")]
        public async Task<ActionResult<Payments>> GetPaymentById(int paymentId)
        {
            var payment = await _paymentsService.GetPaymentById(paymentId);
            if (payment == null)
            {
                return NotFound();
            }
            return Ok(payment);
        }

        [HttpPost]
        public async Task<ActionResult<Payments>> PostPayment(Payments payment)
        {
            var createdPayment = await _paymentsService.PostPayment(payment);
            return CreatedAtAction(nameof(GetPaymentById), new { paymentId = createdPayment.payment_id }, createdPayment);
        }

        [HttpPut("{paymentId}")]
        public async Task<IActionResult> UpdatePayment(int paymentId, Payments payment)
        {
            await _paymentsService.UpdatePayment(paymentId, payment);
            return NoContent();
        }

        [HttpDelete("{paymentId}")]
        public async Task<IActionResult> DeletePayment(int paymentId)
        {
            await _paymentsService.DeletePayment(paymentId);
            return NoContent();
        }
    }
}
