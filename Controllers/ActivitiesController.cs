using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Nelibur.ObjectMapper;
using Workbook_server.Models;
using Workbook_server.Persistence.Repositories;

namespace Workbook_server.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    public class ActivitiesController : Controller
    {
        
        private readonly IActivityRepository _activityRepository;
        private readonly IUserRepository _userRepository;


        public ActivitiesController(IActivityRepository activityRepository, IUserRepository userRepository)
        {
            _activityRepository = activityRepository;
            _userRepository = userRepository;
        }


        private int GetAuthorizeUserId() 
        {

            var userClaim = this.User.FindFirst(ClaimTypes.NameIdentifier);

            var user = this._userRepository.GetUserByEmail(userClaim.Value);

            return user.Id;

        }

        [HttpGet]
        public IActionResult Get() 
        {

            var userId = this.GetAuthorizeUserId();

            var activities = _activityRepository.GetActivitiesByUserId(userId);

            var userActivities = activities.Select(x => TinyMapper.Map<ActivityModel>(x)).ToList();


            return Ok(userActivities);

        }

        [HttpPost]
        public IActionResult Post([FromBody]CreateActivityModel model)
        {

            var userId = this.GetAuthorizeUserId();

            var activityId = _activityRepository.AddActivity(userId, model.Name);

            var activity = new ActivityModel { Id = activityId, Name = model.Name };

            return Created(string.Format("/api/users/{0}/activities/{1}", userId, activityId), activity);
            
        }

    }
}