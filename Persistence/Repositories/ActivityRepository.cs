using System.Collections.Generic;
using System.Linq;
using Workbook_server.Persistence.Entities;

namespace Workbook_server.Persistence.Repositories
{
    public class ActivityRepository : IActivityRepository
    {
        private readonly WorkbookContext _context;

        public ActivityRepository(WorkbookContext context)
        {
            _context = context;
        }


        public IEnumerable<Activity> GetActivitiesByUserId(int userId) 
        {

            var activities = _context.Activities.Where(x => x.IsActive &&
                                                            x.UserId == userId).ToList();

            return activities;

        }

        public int AddActivity(int userId, string activityName) 
        {

            var activity = new Activity
            {

                UserId = userId,

                Name = activityName,

            };

            _context.Activities.Add(activity);

            _context.SaveChanges();


            return activity.Id;

        }
    }
}