using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Nelibur.ObjectMapper;
using Workbook_server.Models;
using Workbook_server.Persistance.Entities;
using Workbook_server.Persistance.Repositories;

namespace Workbook_server.Controllers
{
    [Route("api/[controller]")]
    public class UsersController : Controller
    {

        private readonly IUserRepository _userRepository;

        public UsersController(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        [HttpGet]
        public IEnumerable<UserModel> Get()
        {
            var users = _userRepository.GetUsers();

            return users.Select(x => TinyMapper.Map<UserModel>(x)).ToList();
        }

        [HttpGet("{id}")]
        public UserModel Get(int id)
        {
            var user = _userRepository.GetUserById(id);

            return TinyMapper.Map<UserModel>(user);
        }

        [HttpPost]
        public IActionResult Post([FromBody]UserModel user)
        {
            var existingUser = _userRepository.GetUserByEmail(user.Email);

            if (existingUser != null) 
            {
                return BadRequest();
            };

            var userId = _userRepository.AddUser(TinyMapper.Map<User>(user));

            return Created(string.Format("/api/users/{0}", userId), user);
        }
        
    }
}
