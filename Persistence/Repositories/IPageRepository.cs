using System.Collections.Generic;
using Workbook_server.Persistence.Entities;

namespace Workbook_server.Persistence.Repositories
{
    public interface IPageRepository
    {       
        IEnumerable<Page> GetPagesByBookId(int bookId);      
        IEnumerable<Page> GetPagesByLimitOrder(int bookId, int pageOrder);
        Page GetLastPageByBookId(int bookId);
        Page GetPageById(int pageId);
        Page GetPageByOrder(int pageOrder);
        int AddPage(Page page);
        int EditPageByOrder(int pageOrder, string pageTitle, string pageText);
        int DeletePageByOrder(int pageOrder);
    }
}