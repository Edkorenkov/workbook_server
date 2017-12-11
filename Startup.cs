using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Workbook_server.Common;
using Workbook_server.Persistance;
using Workbook_server.Persistance.Repositories;
using Workbook_server.Services;

namespace Workbook_server
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            Mappings.AddMappings();

            services.AddJwtAuthentication(Configuration);

            services.AddMvc()

                .AddJsonOptions(options =>
                {
                    options.SerializerSettings.DateFormatString = "dd MMMM, yyyy";
                });

            services.AddSingleton<IConfiguration>(x => Configuration);
            services.AddScoped<IUserRepository, UserRepository>();
            services.AddScoped<IBookRepository, BookRepository>();
            services.AddScoped<IPageRepository, PageRepository>();
            services.AddScoped<ISecurityService, SecurityService>();

            services.AddDbContext<WorkbookContext>(x => x.UseSqlServer(Configuration.GetConnectionString("WorkbookConnection")));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseDefaultFiles();

            app.UseStaticFiles();

            app.UseStaticFiles(new StaticFileOptions
            {

                FileProvider = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), @"node_modules")),
                RequestPath = new PathString("/wwwroot"),

            });

            app.UseStaticFiles(new StaticFileOptions
            {

                FileProvider = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), @"node_modules")),
                RequestPath = new PathString("/node_modules"),

            });

            app.UseAuthentication();

            app.UseMvc();
        }
    }
}
