
using System.ComponentModel.DataAnnotations.Schema;

namespace Workbook_server.Persistence.Entities
{
    public class Page : Base
    {

        public int BookId { get; set; }
        public int Order { get; set; }
        public string Title { get; set; }
        public string Text { get; set; }

        [ForeignKey("BookId")]
        public Book Book { get; set; }

    }
}