using AutoMapper;
using demo1.Dtso666.Dto_Dtso666;
using demo1.Dtso666.Entities_Dtso666;
using demo1.Dtso666.Repositoty_Dtso666.Interface;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using System;
using demo1.Dtso666.DataShaping.Interface_Shapping_DTSU666;
using Microsoft.AspNetCore.SignalR;
using demo1.Dtso666.Repositoty_Dtso666.Repo_Dtoo666;

namespace demo1.Controllers
{
    [Route("dtsu666")]
    [ApiController]
    public class DTSU666Controller : ControllerBase
    {
        private readonly IHubContext<DTSU666_Hub, IDTSU666_Repository> _hubContext;
        private readonly IDTSU666_Repository _repo;
        private readonly IDataShaper<DTSU666_Get_Dto> _dataShaper;
        private readonly IMapper _map;
        public DTSU666Controller(IDTSU666_Repository repo, IMapper map, IDataShaper<DTSU666_Get_Dto> dataShaper, IHubContext<DTSU666_Hub, IDTSU666_Repository> hubContext)
        {
            _repo = repo;
            _dataShaper = dataShaper;
            _map = map;
            _hubContext = hubContext;
        }

        //[HttpGet]
        //public async Task<IActionResult> GetAllAsync([FromQuery] DTSU666_DataShapping_Dto repuestShapping, [FromQuery] DateTimeOffset? start, [FromQuery] DateTimeOffset? end)
        //{
        //    var datas = await _repo.GetAllAsync(repuestShapping,start,end);

        //    var map = _map.Map<DTSU666_Get_Dto>(datas);

        //    return Ok(_dataShaper.ShapeData(map, repuestShapping.Fields));
        //}
        [HttpGet]
        public async Task<IActionResult> GetAllAsync([FromQuery] DTSU666_DataShapping_Dto repuestShapping, [FromQuery] DateTimeOffset? start, [FromQuery] DateTimeOffset? end)
        {
            var employeesFromDb = await _repo.GetAllAsync(repuestShapping, start, end);

            var employeesDto = _map.Map<IEnumerable<DTSU666_Get_Dto>>(employeesFromDb);

            return Ok(_dataShaper.ShapeData(employeesDto, repuestShapping.Fields));
        }


        [HttpPost]
        public async Task<ActionResult> CreateAsync([FromBody] DTSU666_Post_Dto dataDto)
        {
            var post = _map.Map<DTSU666_Model>(dataDto);

            await _repo.CreateAsync(post);

            var itemToReturn = _map.Map<DTSU666_Get_Dto>(post);

            return CreatedAtAction(nameof(GetAllAsync), new { id = itemToReturn.Id }, itemToReturn);
        }




    }
}
