
using System.ComponentModel.DataAnnotations.Schema;

namespace Workbook_server.Persistance.Entities
{
    public class Page : Base
    {

        public int BookId { get; set; }
        public string Title { get; set; }
        public string Text { get; set; }

        [ForeignKey("BookId")]
        public Book Book { get; set; }

    }
}