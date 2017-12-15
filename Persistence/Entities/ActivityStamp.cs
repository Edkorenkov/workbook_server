using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Workbook_server.Persistence.Entities
{
    public class ActivityStamp : Base
    {
        public int ActivityId { get; set; }
        
        [MaxLength(150)]
        public string Description { get; set; }

        [ForeignKey("ActivityId")]
        public Activity Activity { get; set; }
    }
}