using System;
using System.Collections.Generic;
using System.Linq;
using Workbook_server.Persistence.Entities;

namespace Workbook_server.Persistence.Repositories
{
    public class ActivityStampRepository : IActivityStampRepository
    {
        private readonly WorkbookContext _context;

        public ActivityStampRepository(WorkbookContext context)
        {
            _context = context;
        }


        public IEnumerable<ActivityStamp> GetUserActivityStampsForPeriod(int userId, DateTime startPeriod, DateTime endPeriod)
        {

            var activityStamps = _context.ActivityStamps

                .Where(x => x.IsActive &&
                            x.Activity.UserId == userId &&
                            ((startPeriod.Year <= x.CreatedFor.Year && startPeriod.Month <= x.CreatedFor.Month && startPeriod.Day <= x.CreatedFor.Day) && 
                             (endPeriod.Year >= x.CreatedFor.Year && endPeriod.Month <= x.CreatedFor.Month && endPeriod.Day <= x.CreatedFor.Day)))
                            
                    .ToList();


            return activityStamps;

        }

        public int AddActivityStamp(ActivityStamp activityStamp) 
        {

            var activity = _context.Activities.FirstOrDefault(x => x.Id == activityStamp.ActivityId);
            
            if (activity == null)
            {
                throw new InvalidOperationException();
            };

            _context.ActivityStamps.Add(activityStamp);

            _context.SaveChanges();


            return activityStamp.Id;

        }

    }
}