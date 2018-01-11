using System.ComponentModel.DataAnnotations.Schema;

namespace Workbook_server.Persistence.Entities
{
    public class Token : Base
    {

        public int UserId { get; set; }
        public string Value { get; set; }

        [ForeignKey("UserId")]
        public User User { get; set; }

    }
}