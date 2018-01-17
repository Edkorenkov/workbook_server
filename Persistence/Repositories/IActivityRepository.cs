using System.Collections.Generic;
using Workbook_server.Persistence.Entities;

namespace Workbook_server.Persistence.Repositories
{
    public interface IActivityRepository
    {
        IEnumerable<Activity> GetActivitiesByUserId(int userId);
        int AddActivity(int userId, string activityName);
    }
}