using System;

namespace demo1.apexchart.entities.DTO_apex
{
 
    public class ApexDto
    {
        public Guid Id { get; init; }
        public string Name { get; init; }
        public float TemperatureC { get; init; }
        public float Humidity { get; init; }
        public DateTimeOffset CreatedDate { get; init; }
    }
}
