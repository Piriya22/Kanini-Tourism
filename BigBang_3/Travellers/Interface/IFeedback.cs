using Travellers.Models;

namespace Travellers.Interface
{
    public interface IFeedbackService
    {
       
        IEnumerable<Feedback> GetAllFeedbacks();
        void AddFeedback(Feedback feedback);
        
    }
}
