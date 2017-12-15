using System.Collections.Generic;
using Workbook_server.Persistence.Entities;

namespace Workbook_server.Persistence.Repositories
{
    public interface IUserRepository
    {

        User GetUserById(int id);
        User GetUserByEmail(string email);
        IEnumerable<User> GetUsers();
        int AddUser(User user);

    }
}