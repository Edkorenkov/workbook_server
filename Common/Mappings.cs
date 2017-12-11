
using Nelibur.ObjectMapper;
using Workbook_server.Models;
using Workbook_server.Persistance.Entities;

namespace Workbook_server.Common
{

    public static class Mappings 
    {

        public static void AddMappings()
        {

            TinyMapper.Bind<User, UserModel>();
            TinyMapper.Bind<UserModel, User>();

            TinyMapper.Bind<Book, BookModel>();
            TinyMapper.Bind<BookModel, Book>();

            TinyMapper.Bind<CreateBookModel, Book>();

            TinyMapper.Bind<Page, PageModel>();

            TinyMapper.Bind<CreatePageModel, Page>();

        }

    }

}