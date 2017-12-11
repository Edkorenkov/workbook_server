using System.Collections.Generic;
using Workbook_server.Persistance.Entities;

namespace Workbook_server.Persistance.Repositories
{
    public interface IBookRepository
    {

        Book GetBookById(int id);
        IEnumerable<Book> GetBooksByUserId(int userId);
        int AddBook(int userId, Book book);
        int RemoveBook(int userId, int bookId);
        
    }
}