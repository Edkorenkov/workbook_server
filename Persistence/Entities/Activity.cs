
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Workbook_server.Persistence.Entities
{
    public class Activity : Base
    {
        public int UserId { get; set; }
        
        [MaxLength(50)]
        public string Name { get; set; }
        
        [ForeignKey("UserId")]
        public User User { get; set; }
        
    }
}