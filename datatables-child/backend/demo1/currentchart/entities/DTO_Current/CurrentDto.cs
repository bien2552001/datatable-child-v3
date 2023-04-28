using System;

namespace demo1.currentchart.entities.DTO_Current
{
    public class CurrentDto
    {
        public Guid Id { get; init; }
        public string Name { get; init; }
        public double Value { get; init; }
        public DateTimeOffset Date { get; init; }
    }
}
