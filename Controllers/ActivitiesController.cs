using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Workbook_server.Persistence.Repositories;

namespace Workbook_server.Controllers
{
    [Authorize]
    [Route("api/users/{userId}/[controller]")]
    public class ActivitiesController : Controller
    {
        
        private readonly IActivityRepository _activityRepository;

        public ActivitiesController(IActivityRepository activityRepository)
        {
            _activityRepository = activityRepository;
        }

        [HttpGet]
        public IActionResult Get(int userId) 
        {

            var activities = _activityRepository.GetActivitiesByUserId(userId);

            return Ok(activities);

        }

        [HttpPost]
        public IActionResult Post(int userId)
        {

            var activityId = 1;

            return Created(string.Format("/api/users/{0}/activities/{1}", userId, activityId), null);
            
        }

    }
}