using AutoMapper;
using demo1.apexchart.entities.DTO_apex;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using System;
using demo1.currentchart.repository_current.Interface_Current;
using demo1.currentchart.entities.Model_Current;
using demo1.currentchart.entities.DTO_Current;
using demo1.Dtso666.Dto_Dtso666;
using demo1.Dtso666.Repositoty_Dtso666.Interface;
using Microsoft.AspNetCore.SignalR;
using demo1.currentchart.SignalHub;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace demo1.Controllers
{

    //[Route("currentchartdemo")]
    //[ApiController]
    //public class CurrentController : ControllerBase
    //{
    //    private readonly ICurrentRepo _current;
    //    private readonly IMapper _map;
    //    public CurrentController(ICurrentRepo current, IMapper map)
    //    {
    //        _current = current;
    //        _map = map;
    //    }

    //    [HttpGet]
    //    public async Task<IEnumerable<Current_Model>> GetDatasByElementAsync([FromQuery] DateTimeOffset? start, [FromQuery] DateTimeOffset? end)
    //    {
    //        var datas = await _current.GetDatasByElementAsync(start, end);
    //        return datas;
    //    }


    //    //POST /datas
    //    [HttpPost]
    //    public async Task<ActionResult> CreateDataAsync([FromBody] PostCurrent dataDto)
    //    {
    //        var itemCreateDto = _map.Map<Current_Model>(dataDto);

    //        await _current.CreateDataAsync(itemCreateDto);

    //        var itemToReturn = _map.Map<CurrentDto>(itemCreateDto);

    //        return CreatedAtAction(nameof(GetDatasByElementAsync), new { id = itemToReturn.Id }, itemToReturn);
    //    }

    [ApiController]
    [Route("[controller]")]
    public class CurrentController : ControllerBase
    {
        private readonly IHubContext<MyHub> _hubContext;
        private readonly IDTSU666_Repository _dtsu666Repository;

        public CurrentController(IHubContext<MyHub> hubContext, IDTSU666_Repository dtsu666Repository)
        {
            _hubContext = hubContext;
            _dtsu666Repository = dtsu666Repository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAsync(DTSU666_DataShapping_Dto repuestShapping, DateTimeOffset? start, DateTimeOffset? end)
        {
            var data = await _dtsu666Repository.GetAllAsync(repuestShapping, start, end);

            await _hubContext.Clients.All.SendAsync("GetData", data);

            return Ok(data);
        }
    }



}

