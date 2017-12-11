using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Workbook_server.Models;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace Workbook_server.Services 
{

    public class SecurityService : ISecurityService
    {

        private readonly string _algorithm = SecurityAlgorithms.HmacSha256;
        private readonly TimeSpan _tokenExperationTime = TimeSpan.FromMinutes(30);
        private readonly string _key;
        private readonly string _issuer;
        private readonly string _audience;

        public SecurityService(IConfiguration configuration)
        {
            
            _key = configuration["Tokens:Key"];

            _issuer = configuration["Tokens:Issuer"];

            _audience = configuration["Tokens:Audience"];

        }

        public SecurityModel CreateToken(string userEmail) 
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

                ExperationTime = DateTime.Now.AddMinutes(_tokenExperationTime.Minutes).ToString("dd.MM.yyyy HH:mm:ss"),

            };

        }

        public static SymmetricSecurityKey CreateSecurityKey(string secretKey) 
        {

            return new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secretKey));

        }

    }

}