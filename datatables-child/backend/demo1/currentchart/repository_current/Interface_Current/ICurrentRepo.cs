using demo1.apexchart.entities.model_apex;
using System.Collections.Generic;
using System.Threading.Tasks;
using System;
using demo1.currentchart.entities.Model_Current;

namespace demo1.currentchart.repository_current.Interface_Current
{
    public interface ICurrentRepo
    { //Async
        Task CreateDataAsync(Current_Model data);

        //Parameter
        Task<IEnumerable<Current_Model>> GetDatasByElementAsync(DateTimeOffset? start, DateTimeOffset? end);

    }
}
