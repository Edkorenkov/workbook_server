using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using Workbook_server.Services;

namespace Workbook_server.Common
{
    public static class JwtAuthentication 
    {
        public static void AddJwtAuthentication(this IServiceCollection services, IConfiguration configuration) 
        {
            services
            
                .AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(options => 
                {

                    options.RequireHttpsMetadata = false;
                    options.TokenValidationParameters = new TokenValidationParameters 
                    {
                        ValidateIssuer = true,
                        ValidIssuer = configuration["Tokens:Issuer"],
                        ValidateAudience = true,
                        ValidAudience = configuration["Tokens:Audience"],
                        ValidateLifetime = true,
                        IssuerSigningKey = SecurityService.CreateSecurityKey(configuration["Tokens:Key"]),
                        ValidateIssuerSigningKey = true,
                    };

                });

        }
    
    }
}