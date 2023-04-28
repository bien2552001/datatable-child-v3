
using System;
using System.Globalization;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace demo1.entities.ConvertDate
{
    public class DateConverter : JsonConverter<DateTime>
    {
        private string formatDate = "yyyy-MM-dd HH:mm:ss tt";

        public override DateTime Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
        {
            return DateTime.ParseExact(reader.GetString(), formatDate, CultureInfo.InvariantCulture);
        }

       
        public override void Write(Utf8JsonWriter writer, DateTime value, JsonSerializerOptions options)
        {
            writer.WriteStringValue(value.ToString(formatDate));
        }

     
    }
}
