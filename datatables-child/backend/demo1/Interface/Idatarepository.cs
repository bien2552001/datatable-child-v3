using demo1.entities.model;
using System.Collections.Generic;
using System.Threading.Tasks;
using System;

namespace demo1.Interface
{
    public interface Idatarepository
    {
        Task<IEnumerable<datamodel>> GetAllCurrentAsync(DateTime? startDate, DateTime? endDate);
        Task Post(datamodel itemCreateDto);
    }
}
