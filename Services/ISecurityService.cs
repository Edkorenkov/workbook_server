using Workbook_server.Models;

namespace Workbook_server.Services
{
    public interface ISecurityService
    {

        SecurityModel CreateToken(string userEmail, string refreshTokenValue);
        SecurityModel RefreshToken(int userId);

    }
}