using System.ComponentModel.DataAnnotations;

namespace demo1.apexchart.entities.DTO_apex
{
  
    public record PutApexDto
    {
        [Required]
        public string Name { get; init; }
        [Required]
        [Range(1, 100)]
        public float TemperatureC { get; init; }
        [Required]
        [Range(0, 100)]
        public float Humidity { get; init; }
    }
}
