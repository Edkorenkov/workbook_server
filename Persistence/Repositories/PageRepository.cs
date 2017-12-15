
using System;
using System.Collections.Generic;
using System.Linq;
using Workbook_server.Persistence.Entities;

namespace Workbook_server.Persistence.Repositories
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
            return _context.Pages
            
                .Where(x => x.BookId == bookId && x.IsActive)
                
                .OrderBy(x => x.Order)

                .ToList();
        }

        public IEnumerable<Page> GetPagesByLimitOrder(int bookId, int pageOrder) 
        {
            return _context.Pages
            
                .Where(x => x.BookId == bookId && x.Order > pageOrder && x.IsActive)
                
                .OrderBy(x => x.Order)

                .ToList();
        }

        public Page GetPageById(int pageId)
        {
            return _context.Pages.FirstOrDefault(x => x.Id == pageId && x.IsActive);
        }

        public Page GetPageByOrder(int pageOrder)
        {
            return _context.Pages.FirstOrDefault(x => x.Order == pageOrder && x.IsActive);
        }

        public Page GetLastPageByBookId(int bookId)
        {
            return _context.Pages

                .Where(x => x.BookId == bookId && x.IsActive)

                .OrderBy(x => x.Order)

                .LastOrDefault();
        }

        public int AddPage(Page page)
        {           
            var lastPage = this.GetLastPageByBookId(page.BookId);

            var pageOrder = 1;

            if (lastPage != null) 
            {
                pageOrder += lastPage.Order;
            };
          
            page.IsActive = true;

            page.Order = pageOrder;


            _context.Pages.Add(page);

            _context.SaveChanges();

            return page.Order;     
        }

        public int EditPageByOrder(int pageOrder, string pageTitle, string pageText) 
        {

            var page = this.GetPageByOrder(pageOrder);


            page.Title = pageTitle;

            page.Text = pageText;

            page.DateModified = DateTime.Now;


            _context.SaveChanges();

            return page.Order;

        }

        public int DeletePageByOrder(int pageOrder) 
        {

            var page = this.GetPageByOrder(pageOrder);

            var limitPages = this.GetPagesByLimitOrder(page.BookId, page.Order);


            foreach(var limitPage in limitPages) 
            {
                limitPage.Order -= 1;
            };
            

            page.IsActive = false;

            page.DateModified = DateTime.Now;


            _context.SaveChanges();

            return page.Order;

        }

    }

}