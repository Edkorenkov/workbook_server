using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Workbook_server.Models;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Workbook_server.Persistence.Repositories;

namespace Workbook_server.Services 
{

    public class SecurityService : ISecurityService
    {

        private readonly string _algorithm = SecurityAlgorithms.HmacSha256;
        private readonly TimeSpan _tokenExperationTime = TimeSpan.FromMinutes(30);
        private readonly string _key;
        private readonly string _issuer;
        private readonly string _audience;
   
        private readonly IUserRepository _userRepository;
        private readonly ITokenRepository _tokenRepository;

        public SecurityService(IConfiguration configuration, IUserRepository userRepository, ITokenRepository tokenRepository)
        {
            
            _key = configuration["Tokens:Key"];

            _issuer = configuration["Tokens:Issuer"];

            _audience = configuration["Tokens:Audience"];

            _userRepository = userRepository;

            _tokenRepository = tokenRepository;

        }

        public SecurityModel CreateToken(string userEmail, string refreshTokenValue) 
        {

            var jwtHandler = new JwtSecurityTokenHandler();

            var securityKey = SecurityService.CreateSecurityKey(_key);

            var credentials = new SigningCredentials(securityKey, _algorithm);

            var claims = new Claim[] 
            {

                new Claim(JwtRegisteredClaimNames.Sub, userEmail),

                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),

            };

            var token = new JwtSecurityToken
            (
                issuer: _issuer,
                audience: _audience,
                claims: claims,
                expires: DateTime.UtcNow.AddMinutes(_tokenExperationTime.Minutes),
                signingCredentials: credentials
            );

            return new SecurityModel
            {

                Token = jwtHandler.WriteToken(token),

                RefreshToken = refreshTokenValue,

                ExperationTime = DateTime.Now.AddMinutes(_tokenExperationTime.Minutes).ToString("dd.MM.yyyy HH:mm:ss"),

            };

        }

        public SecurityModel RefreshToken(int userId) 
        {

            var refreshToken = _tokenRepository.GetTokenByUserId(userId);

            if (refreshToken == null) {

                throw new UnauthorizedAccessException();

            };

            var user = _userRepository.GetUserById(userId);

            if (refreshToken == null) {

                throw new UnauthorizedAccessException();

            };

            _tokenRepository.RemoveToken(refreshToken.Id);

            var newRefreshToken = _tokenRepository.CreateToken(userId);


            return this.CreateToken(user.Email, newRefreshToken);

        }

        public static SymmetricSecurityKey CreateSecurityKey(string secretKey) 
        {

            return new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secretKey));

        }

    }

}