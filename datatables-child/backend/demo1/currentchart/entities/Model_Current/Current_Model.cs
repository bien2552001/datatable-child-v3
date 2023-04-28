using System;

namespace demo1.currentchart.entities.Model_Current
{
    public class Current_Model
    {
        public Guid Id { get; init; }
        public string Name { get; init; }
        public double Value { get; init; }
        public DateTimeOffset Date { get; init; }
    }
}
