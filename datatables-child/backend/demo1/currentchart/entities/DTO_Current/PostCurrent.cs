using System;
using System.ComponentModel.DataAnnotations;

namespace demo1.currentchart.entities.DTO_Current
{
    public class PostCurrent
    {
        public string Name = "Dòng điện";

        [Required]
        // [Range(1,100)]
        public double Value { get; init; }
        
        public DateTimeOffset Date = DateTimeOffset.Now;
    }
}
