using System;
using System.Globalization;

namespace demo1.entities.DTO
{
    public class PostDto
    {
        public double value { get; set; }
        public string Name = "Dòng điện";
        public DateTime Date = DateTime.Now;

    }
}