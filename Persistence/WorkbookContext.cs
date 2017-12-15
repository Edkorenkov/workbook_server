using Microsoft.EntityFrameworkCore;
using Workbook_server.Persistence.Entities;

namespace Workbook_server.Persistence
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
        public DbSet<Activity> Activities { get; set; }
        public DbSet<ActivityStamp> ActivityStamps { get; set; }

    }

}