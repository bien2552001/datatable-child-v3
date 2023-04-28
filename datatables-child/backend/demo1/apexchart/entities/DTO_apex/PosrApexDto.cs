using System;
using System.ComponentModel.DataAnnotations;

namespace demo1.apexchart.entities.DTO_apex
{
 
    public record PosrApexDto
    {
        public string Name = "Nhiệt độ";

        [Required]
        // [Range(1,100)]
        public float TemperatureC { get; init; }
        [Required]
        // [Range(0,100)]
        public float Humidity { get; init; }

        public DateTimeOffset CreatedDate = DateTimeOffset.Now;

       
    }



}
