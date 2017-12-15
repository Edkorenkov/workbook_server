using System.Collections.Generic;
using Workbook_server.Persistence.Entities;

namespace Workbook_server.Persistence.Repositories
{
    public interface IPageRepository
    {

        IEnumerable<Page> GetPagesByBookId(int bookId);
        Page GetPageById(int pageId);
        int AddPage(Page page);
        int EditPage(int pageId, string pageTitle, string pageText);
        int DeletePage(int pageId);

    }
}