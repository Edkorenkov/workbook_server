
using System;
using System.Collections.Generic;
using System.Linq;
using Workbook_server.Persistance.Entities;

namespace Workbook_server.Persistance.Repositories
{

    public class PageRepository : IPageRepository
    {

        private readonly WorkbookContext _context;

        public PageRepository(WorkbookContext context)
        {
            _context = context;
        }

        public IEnumerable<Page> GetPagesByBookId(int bookId)
        {
            return _context.Pages.Where(x => x.BookId == bookId && x.IsActive).ToList();
        }

        public Page GetPageById(int pageId)
        {
            return _context.Pages.FirstOrDefault(x => x.Id == pageId && x.IsActive);
        }

        public int AddPage(Page page)
        {
                  
            page.IsActive = true;

            _context.Pages.Add(page);

            _context.SaveChanges();

            return page.Id;     
        }

        public int EditPage(int pageId, string pageTitle, string pageText) 
        {

            var page = this.GetPageById(pageId);


            page.Title = pageTitle;

            page.Text = pageText;

            page.DateModified = DateTime.Now;


            _context.SaveChanges();

            return page.Id;

        }

        public int DeletePage(int pageId) 
        {

            var page = this.GetPageById(pageId);


            page.IsActive = false;

            page.DateModified = DateTime.Now;


            _context.SaveChanges();

            return page.Id;

        }

    }

}