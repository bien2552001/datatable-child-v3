using demo1.Dtso666.Entities_Dtso666;
using System.Collections.Generic;
using System.Threading.Tasks;
using System;
using Microsoft.AspNetCore.Mvc;
using demo1.Dtso666.Dto_Dtso666;

namespace demo1.Dtso666.Repositoty_Dtso666.Interface
{
    public interface IDTSU666_Repository
    {
        Task<IEnumerable<DTSU666_Model>> GetAllAsync(DTSU666_DataShapping_Dto repuestShapping, DateTimeOffset? start, DateTimeOffset? end);

        Task CreateAsync(DTSU666_Model data); // Tạo ra dữ liệu trong kho dữ liệu 

    }
}
