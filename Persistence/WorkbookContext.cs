using Microsoft.EntityFrameworkCore;
using Workbook_server.Persistance.Entities;

namespace Workbook_server.Persistance
{

    public class WorkbookContext : DbContext
    {

        public WorkbookContext(DbContextOptions<WorkbookContext> options)
            : base(options)
        {
        }

        public DbSet<User> Users { get; set; }    
        public DbSet<Book> Books { get; set; }     
        public DbSet<Page> Pages { get; set; }     

    }

}