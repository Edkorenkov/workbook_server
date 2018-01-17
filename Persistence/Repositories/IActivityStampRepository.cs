using System;
using System.Collections.Generic;
using Workbook_server.Persistence.Entities;

namespace Workbook_server.Persistence.Repositories
{
    public interface IActivityStampRepository
    {
        IEnumerable<ActivityStamp> GetUserActivityStampsForPeriod(int userId, DateTime startPeriod, DateTime endPeriod);
    }
}