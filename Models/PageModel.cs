using System;

namespace Workbook_server.Models
{

    public class PageModel 
    {

        public int Id { get; set; }
        public int BookId { get; set; }
        public string Title { get; set; }
        public string Text { get; set; }
        public DateTime DateCreated { get; set; }

    }

}