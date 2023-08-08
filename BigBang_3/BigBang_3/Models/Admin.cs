using System.ComponentModel.DataAnnotations;

namespace BigBang_3.Models
{
    public class Admin
    {
        [Key] 
        public int admin_id { get; set; }
        public string admin_name { get; set; }
        public string admin_password { get; set; }

    }
}
