using System;
using System.Linq;
using Workbook_server.Persistence.Entities;

namespace Workbook_server.Persistence.Repositories
{
    public class TokenRepository : ITokenRepository
    {
        private readonly WorkbookContext _context;

        public TokenRepository(WorkbookContext context)
        {
            _context = context;
        }

        public Token GetTokenByUserId(int userId)
        {
            return _context.Tokens.FirstOrDefault(x => x.UserId == userId && x.IsActive);
        }

        public string CreateToken(int userId)
        {
            var token = new Token
            {
                UserId = userId,

                Value = Guid.NewGuid().ToString("N")
            };

            _context.Tokens.Add(token);

            _context.SaveChanges();


            return token.Value;
        }

        public int RemoveToken(int tokenId) 
        {

            var token = _context.Tokens.FirstOrDefault(x => x.Id == tokenId && x.IsActive);

            token.IsActive = false;

            token.DateModified = DateTime.Now;

            _context.SaveChanges();


            return tokenId;

        }
    }
}