
namespace Workbook_server.Models
{

    public class SecurityModel 
    {
        public int UserId { get; set; }
        public string Token { get; set; }
        public string RefreshToken { get; set; }
        public string ExperationTime { get; set; }
    }

}