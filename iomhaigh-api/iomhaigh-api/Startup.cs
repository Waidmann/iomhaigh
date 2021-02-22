using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MySQL.Data.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using MediatR;
using System.Reflection;
using iomhaigh_api.mediator;
using System.IO;
using Pomelo.EntityFrameworkCore.MySql.Internal;

namespace iomhaigh_api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public IConfiguration _configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddLogging(builder =>
                builder
                    .AddDebug()
                    .AddConsole()
                    .AddConfiguration(_configuration.GetSection("Logging"))
                    .SetMinimumLevel(LogLevel.Information)
            );

            services.AddMediatR(Assembly.GetExecutingAssembly());

            services.AddCors();

            services.AddDbContext<IomhaighDbContext>(
                options =>
                {
                    options.UseMySQL(String.Format("server={0};database={1};user={2};password={3}",
                        _configuration["DB_SERVER"],
                        _configuration["MYSQL_DATABASE"],
                        _configuration["MYSQL_USER"],
                        _configuration["MYSQL_PASSWORD"]
                    ));
                }
                );

            services.AddControllers().AddNewtonsoftJson(options =>
                options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore
            );

            services.AddControllers();

            services.AddTransient<ISkillInteractionNotifierMediator, SkillInteractionNotifierMediator>();
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env,
            IomhaighDbContext db)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            db.Database.EnsureCreated();

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseCors(options => options.SetIsOriginAllowed(x => _ = true).AllowAnyMethod().AllowAnyHeader().AllowCredentials());

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
