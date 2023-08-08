using Travellers.Interface;
using Travellers.Models;
namespace Travellers.Service
{
    public class FeedbackService : IFeedbackService
    {
        
        
            private readonly TravellerContext _context; 

            public FeedbackService(TravellerContext context) 
            {
                _context = context;
            }

           

            public IEnumerable<Feedback> GetAllFeedbacks()
            {
                return _context.feedback.ToList();
            }

            public void AddFeedback(Feedback feedback)
            {
                _context.feedback.Add(feedback);
                _context.SaveChanges();
            }

            

           
        }
    }

