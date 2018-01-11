using Workbook_server.Persistence.Entities;

namespace Workbook_server.Persistence.Repositories
{
    public interface ITokenRepository
    {
        Token GetTokenByUserId(int userId);  
        string CreateToken(int userId);      
        int RemoveToken(int tokenId);  
    }
}