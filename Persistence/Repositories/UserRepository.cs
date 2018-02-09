
using System.Collections.Generic;
using System.Linq;
using Workbook_server.Persistence.Entities;

namespace Workbook_server.Persistence.Repositories
{

    public class UserRepository : IUserRepository
    {

        private readonly WorkbookContext _context;

        public UserRepository(WorkbookContext context)
        {
            _context = context;
        }

        public User GetUserById(int id)
        {
            return _context.Users.Find(id);
        }

        public User GetUserByToken(string token)
        {
            return _context.Tokens.Where(x => x.Value == token && x.IsActive).Select(x => x.User).FirstOrDefault();
        }

        public User GetUserByEmail(string email) 
        {
            return _context.Users.FirstOrDefault(x => x.Email.Equals(email));
        }

        public IEnumerable<User> GetUsers()
        {
            return _context.Users.ToList();
        }

        public int AddUser(User user)
        {
            _context.Users.Add(user);

            _context.SaveChanges();

            return user.Id;          
        }

    }

}