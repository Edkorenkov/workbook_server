using System.Collections.Generic;
using Workbook_server.Persistance.Entities;

namespace Workbook_server.Persistance.Repositories
{
    public interface IUserRepository
    {

        User GetUserById(int id);
        User GetUserByEmail(string email);
        IEnumerable<User> GetUsers();
        int AddUser(User user);

    }
}