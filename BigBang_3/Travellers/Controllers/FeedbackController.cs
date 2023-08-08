using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Travellers.Interface;
using Travellers.Models;

namespace Travellers.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FeedbackController : ControllerBase
    {
            private readonly IFeedbackService _feedbackService;

            public FeedbackController(IFeedbackService feedbackService)
            {
                _feedbackService = feedbackService;
            }



        [HttpGet]
        public IActionResult GetAll()
        {
            var feedbacks = _feedbackService.GetAllFeedbacks();
            return Ok(feedbacks);
        }

        [HttpPost]
        public IActionResult AddFeedback(Feedback feedback)
        {
            _feedbackService.AddFeedback(feedback);
            return CreatedAtAction(nameof(GetAll), new { id = feedback.feedback_id }, feedback); 
        }

    } 
}

