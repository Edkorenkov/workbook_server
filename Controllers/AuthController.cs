using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Nelibur.ObjectMapper;
using Workbook_server.Models;
using Workbook_server.Persistence.Entities;
using Workbook_server.Persistence.Repositories;
using Workbook_server.Services;

namespace Learning_JWT.Controllers
{
    [Route("api/[controller]")]
    public class AuthController : Controller
    {
        
        private readonly ISecurityService _securityService;
        private readonly IUserRepository _userRepository;


        public AuthController(ISecurityService securityService, IUserRepository userRepository)
        {

            _securityService = securityService;
            _userRepository = userRepository;

        }


        [AllowAnonymous]
        [HttpPost("signin")]
        public IActionResult Signin([FromBody]SigninModel user) 
        {

            if (user == null)
            {
                return BadRequest("Empty credentials.");
            };

            var existingUser = _userRepository.GetUserByEmail(user.Email);

            if (existingUser == null) 
            {
                return BadRequest("User was not found.");
            };

            if (!existingUser.Password.Equals(user.Password)) 
            {
                return Unauthorized();
            };

            var securityResult = _securityService.CreateToken(user.Email);

            return Ok(securityResult);

        }

        [AllowAnonymous]
        [HttpPost("signup")]
        public IActionResult Signup([FromBody]UserModel user) 
        {

            if (user == null)
            {
                return BadRequest("Empty credentials.");
            };

            var existingUser = _userRepository.GetUserByEmail(user.Email);

            if (existingUser != null) 
            {
                return BadRequest("User has already exist.");
            };

            var userId = _userRepository.AddUser(TinyMapper.Map<User>(user));

            var securityResult = _securityService.CreateToken(user.Email);

            return Created(string.Format("/api/users/{0}", userId), securityResult);

        }

    }
}
