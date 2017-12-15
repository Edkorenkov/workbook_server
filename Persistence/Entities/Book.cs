using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations.Schema;

namespace Workbook_server.Persistence.Entities
{
    public class Book : Base
    {

        public int UserId { get; set; }
        public string Title { get; set; }

        [ForeignKey("UserId")]
        public User User { get; set; }
        public virtual ICollection<Page> Pages { get; set; }

        public Book()
        {
            Pages = new Collection<Page>();
        }

    }
}