
using System;
using System.Collections.Generic;
using System.Linq;
using Workbook_server.Persistence.Entities;

namespace Workbook_server.Persistence.Repositories
{

    public class BookRepository : IBookRepository
    {

        private readonly WorkbookContext _context;

        public BookRepository(WorkbookContext context)
        {
            _context = context;
        }

        public Book GetBookById(int id)
        {
            return _context.Books.Find(id);
        }

        public IEnumerable<Book> GetBooksByUserId(int userId)
        {
            return _context.Books.Where(x => x.UserId == userId && x.IsActive).ToList();
        }

        public int AddBook(int userId, Book book)
        {
            
            book.UserId = userId;

            book.IsActive = true;

            _context.Books.Add(book);

            _context.SaveChanges();

            return book.Id;          
        }

        public int RemoveBook(int userId, int bookId) 
        {

            var book = this.GetBookById(bookId);


            if (book.UserId != userId) 
            {

                throw new ApplicationException();

            };

            book.IsActive = false;

            book.DateModified = DateTime.Now;

            _context.SaveChanges();


            return bookId;

        }

    }

}