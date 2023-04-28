using Microsoft.AspNetCore.SignalR;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Xml.Linq;
using System;
using demo1.currentchart.repository_current.Repository_Current;
using demo1.currentchart.entities.Model_Current;

namespace demo1.currentchart.SignalHub
{
    public class MyHub : Hub
    {
        private readonly CurrentRepo _dbContext;

        public MyHub(CurrentRepo dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<IEnumerable<Current_Model>> GetAllAsync(DateTimeOffset? start, DateTimeOffset? end)
        {
            return await _dbContext.GetDatasByElementAsync(start, end);
        }
    }
}