using AutoMapper;
using demo1.apexchart.entities.DTO_apex;
using demo1.apexchart.entities.model_apex;
using demo1.apexchart.repository_apex.Interface_apex;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace demo1.Controllers
{
    [Route("chart")]
    [ApiController]
    public class ApexController : ControllerBase
    {
        private readonly IApexRepository _apexrepo;
        private readonly IMapper _map;
        public ApexController(IApexRepository apexrepo, IMapper map)
        {
            _apexrepo = apexrepo;
            _map = map;
        }

        [HttpGet]
        public async Task<IEnumerable<ApexModel>> GetDatasByElementAsync([FromQuery] DateTimeOffset? start, [FromQuery] DateTimeOffset? end)
        {
            var datas = await _apexrepo.GetDatasByElementAsync(start, end);
            return datas;
        }

        //[HttpGet]
        //public async Task<IEnumerable<datamodel>> GetAllCurrentAsync([FromQuery] DateTime? startDate, [FromQuery] DateTime? endDate)
        //{

        //    var users = await _getmongo.GetAllCurrentAsync(startDate, endDate);

        //    return users;
        //}
        //// GET /datas/{id}
        //[HttpGet("{id}")]
        //public async Task<ActionResult<ApexDto>> GetDataAsync(Guid id)
        //{
        //    var data = await _apexrepo.GetDataAsync(id);

        //    if (data is null)
        //    {
        //        return NotFound();
        //    }
        //    return data.AsDto();
        //}
        //POST /datas
        [HttpPost]
        public async Task<ActionResult> CreateDataAsync([FromBody] PosrApexDto dataDto)
        {
            var itemCreateDto = _map.Map<ApexModel>(dataDto);

            await _apexrepo.CreateDataAsync(itemCreateDto);

            var itemToReturn = _map.Map<ApexDto>(itemCreateDto);

            return CreatedAtAction(nameof(GetDatasByElementAsync), new { id = itemToReturn.Id }, itemToReturn);
        }


        //[HttpPost]
        //public async Task<IActionResult> Post([FromBody] PostDto item)
        //{

        //    var itemCreateDto = _map.Map<datamodel>(item); // chúng tôi ánh xạ Item để tạo thành thực thể itemCreateDto

        //    await _getmongo.Post(itemCreateDto); // gọi phương thức kho lưu trữ để tạo itemCreateDto mới trong cơ sở dữ liệu 

        //    var itemToReturn = _map.Map<GetDto>(itemCreateDto); //  chúng tôi ánh xạ thực thể Item cho đối tượng ItemDto để trả lại cho khách hàng.

        //    return CreatedAtAction(nameof(GetAllCurrentAsync), new { id = itemToReturn.Id }, itemToReturn);// THam khảo phương thức CreateAtAction tại: https://ochzhen.com/blog/created-createdataction-createdatroute-methods-explained-aspnet-core
        //                                                                                                   // Khi chạy bất đồng bộ thì phương thức CreatedAtAction(nameof(GetItemAsync) sẽ xóa đi hậu tố Async và để khắc phục điều đó thì trong lớp startup cấu hình lại phương thức addController
        //}

        // PUT /datas/{id}
        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateDataAsync(Guid id, PutApexDto dataDto)
        {
            var existingData = await _apexrepo.GetDataAsync(id);

            if (existingData is null)
            {
                return NotFound();
            }
            ApexModel updatedData = existingData with
            {
                Name = dataDto.Name,
                TemperatureC = dataDto.TemperatureC,
                Humidity = dataDto.Humidity,
            };

            await _apexrepo.UpdateDataAsync(updatedData);

            return NoContent();
        }

        //DELETE /datas/{id}
        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteDataAsync(Guid id)
        {
            var existingData = await _apexrepo.GetDataAsync(id);

            if (existingData is null)
            {
                return NotFound();
            }

            await _apexrepo.DeleteDataAsync(id);

            return NoContent();
        }

        
    }
}
