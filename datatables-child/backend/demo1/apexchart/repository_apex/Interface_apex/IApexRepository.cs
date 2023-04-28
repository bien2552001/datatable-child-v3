using System.Collections.Generic;
using System.Threading.Tasks;
using System;
using demo1.apexchart.entities.model_apex;
using demo1.entities.model;

namespace demo1.apexchart.repository_apex.Interface_apex
{
 
    public interface IApexRepository
    {
        //Async
        Task<ApexModel> GetDataAsync(Guid id);
        Task<IEnumerable<ApexModel>> GetDatasAsync();
        Task CreateDataAsync(ApexModel data);
        Task UpdateDataAsync(ApexModel data);
        Task DeleteDataAsync(Guid id);
        //Parameter
        Task<IEnumerable<ApexModel>> GetDatasByElementAsync( DateTimeOffset? start, DateTimeOffset? end);

    }
}
