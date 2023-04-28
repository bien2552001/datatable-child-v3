using MongoDB.Driver;
using System.Collections.Generic;
using System.Threading.Tasks;
using System;
using demo1.entities.model;
using MongoDB.Bson;
using demo1.Interface;
using demo1.entities.DTO;
using System.Globalization;

namespace demo1.repository.data
{
    public class datarepository: Idatarepository
    {
        private const string databaseName = "Data";   // Thuộc tính tên cơ sở dữ liệu 

        private const string collectionName = "datatest"; // Thuộc tính tên của bộ sưu tập 

        //private readonly FilterDefinitionBuilder<datamodel> filterBuilder = Builders<datamodel>.Filter; // Thuộc tính bộ lọc 

        private readonly IMongoCollection<datamodel> currentCollection; // Tạo bộ sưu tập từ lớp Item

        public datarepository()
        {
        }

        public datarepository(IMongoClient mongoClient)
        {
            IMongoDatabase database = mongoClient.GetDatabase(databaseName); // Tham chiếu đến tên cơ sở dữ liệu 

            currentCollection = database.GetCollection<datamodel>(collectionName);// Tham chiếu đến tên bộ sưu tập 

        }
        public async Task<IEnumerable<datamodel>> GetAllCurrentAsync(DateTime? startDate, DateTime? endDate)
        {
            var filter = Builders<datamodel>.Filter.Empty;

            if (startDate != null)
            {
                filter = Builders<datamodel>.Filter.And(filter, Builders<datamodel>.Filter.Gte(x => x.Date, startDate));
            }

            if (endDate != null)
            {
                filter = Builders<datamodel>.Filter.And(filter, Builders<datamodel>.Filter.Lte(x => x.Date, endDate));
            }

            return await currentCollection.Find(filter).ToListAsync();
        }


        //public async Task<IEnumerable<datamodel>> GetAllCurrentAsync(DateTimeOffset? startDate, DateTimeOffset? endDate)
        //{
        //    var filter = Builders<datamodel>.Filter.Empty;

        //    if (startDate.HasValue)
        //    {
        //        var startFilter = Builders<datamodel>.Filter.Empty;
        //        if (startDate.Value.Year > 0) startFilter &= Builders<datamodel>.Filter.Where(x => x.Date.Year >= startDate.Value.Year);
        //        if (startDate.Value.Month > 0) startFilter &= Builders<datamodel>.Filter.Where(x => x.Date.Month >= startDate.Value.Month);
        //        if (startDate.Value.Day > 0) startFilter &= Builders<datamodel>.Filter.Where(x => x.Date.Day >= startDate.Value.Day);
        //        if (startDate.Value.Hour >= 0) startFilter &= Builders<datamodel>.Filter.Where(x => x.Date.Hour >= startDate.Value.Hour);
        //        if (startDate.Value.Minute >= 0) startFilter &= Builders<datamodel>.Filter.Where(x => x.Date.Minute >= startDate.Value.Minute);
        //        if (startDate.Value.Second >= 0) startFilter &= Builders<datamodel>.Filter.Where(x => x.Date.Second >= startDate.Value.Second);

        //        filter &= startFilter;
        //    }

        //    if (endDate.HasValue)
        //    {
        //        var endFilter = Builders<datamodel>.Filter.Empty;
        //        if (endDate.Value.Year > 0) endFilter &= Builders<datamodel>.Filter.Where(x => x.Date.Year <= endDate.Value.Year);
        //        if (endDate.Value.Month > 0) endFilter &= Builders<datamodel>.Filter.Where(x => x.Date.Month <= endDate.Value.Month);
        //        if (endDate.Value.Day > 0) endFilter &= Builders<datamodel>.Filter.Where(x => x.Date.Day <= endDate.Value.Day);
        //        if (endDate.Value.Hour >= 0) endFilter &= Builders<datamodel>.Filter.Where(x => x.Date.Hour <= endDate.Value.Hour);
        //        if (endDate.Value.Minute >= 0) endFilter &= Builders<datamodel>.Filter.Where(x => x.Date.Minute <= endDate.Value.Minute);
        //        if (endDate.Value.Second >= 0) endFilter &= Builders<datamodel>.Filter.Where(x => x.Date.Second <= endDate.Value.Second);

        //        filter &= endFilter;
        //    }

        //    return await currentCollection.Find(filter).ToListAsync();
        //}

        //public async Task<IEnumerable<datamodel>> GetAllCurrentAsync(string startString, string endString)
        //{
        //    var filter = Builders<datamodel>.Filter.Empty;

        //    if (DateTime.TryParse(startString, out DateTime startDate))
        //    {
        //        var startFilter = Builders<datamodel>.Filter.Gte(x => x.Date, startDate);
        //        filter = Builders<datamodel>.Filter.And(filter, startFilter);
        //    }

        //    if (DateTime.TryParse(endString, out DateTime endDate))
        //    {
        //        var endFilter = Builders<datamodel>.Filter.Lte(x => x.Date, endDate);
        //        filter = Builders<datamodel>.Filter.And(filter, endFilter);
        //    }

        //    return await currentCollection.Find(filter).ToListAsync();
        //}
        //public async Task<IEnumerable<datamodel>> GetAllCurrentAsync(DateTime? startDate, DateTime? endDate)
        //{
        //    var filter = Builders<datamodel>.Filter.Empty;

        //    if (startDate.HasValue)
        //    {
        //        var startFilter = Builders<datamodel>.Filter.Where(x => x.Date.CompareTo(startDate.Value) >= 0);
        //        filter &= startFilter;
        //    }

        //    if (endDate.HasValue)
        //    {
        //        var endFilter = Builders<datamodel>.Filter.Where(x => x.Date.CompareTo(endDate.Value) <= 0);
        //        filter &= endFilter;
        //    }

        //    return await currentCollection.Find(filter).ToListAsync();
        //}

        //public async Task<IEnumerable<datamodel>> GetAllCurrentAsync(DateTime? startDate, DateTime? endDate)
        //{
        //    var filter = Builders<datamodel>.Filter.Empty;

        //    if (startDate.HasValue)
        //    {
        //        DateTime startDateValue = startDate.Value; // khởi tạo biến startDateValue

        //        var startFilter = Builders<datamodel>.Filter.Empty;

        //        var startDateString = startDateValue.ToString("yyyy-MM-dd HH:mm:ss tt");

        //        // Năm-tháng-ngày
        //        startFilter &= Builders<datamodel>.Filter.Where(x => DateTime.Parse(x.Date.UtcDateTime.ToString("yyyy-MM-dd")) >= DateTime.Parse(startDateString.Substring(0, 10)));

        //        // Tháng-ngày-giờ
        //        startFilter &= Builders<datamodel>.Filter.Where(x => DateTime.Parse(x.Date.UtcDateTime.ToString("yyyy-MM-dd HH:mm:ss")) >= DateTime.Parse(startDateString.Substring(0, 15)));

        //        // Giờ-phút-giây
        //        startFilter &= Builders<datamodel>.Filter.Where(x => DateTime.Parse(x.Date.UtcDateTime.ToString("HH:mm:ss")) >= DateTime.Parse(startDateString.Substring(11, 8)));


        //        // Năm
        //        if (startDateValue.Year > 0) startFilter &= Builders<datamodel>.Filter.Where(x => x.Date.Year >= startDateValue.Year);

        //        // Tháng
        //        if (startDateValue.Month > 0) startFilter &= Builders<datamodel>.Filter.Where(x => x.Date.Month >= startDateValue.Month);

        //        // Ngày
        //        if (startDateValue.Day > 0) startFilter &= Builders<datamodel>.Filter.Where(x => x.Date.Day >= startDateValue.Day);

        //        // Giờ
        //        if (startDateValue.Hour >= 0) startFilter &= Builders<datamodel>.Filter.Where(x => x.Date.Hour >= startDateValue.Hour);

        //        // Phút
        //        if (startDateValue.Minute >= 0) startFilter &= Builders<datamodel>.Filter.Where(x => x.Date.Minute >= startDateValue.Minute);

        //        // Giây
        //        if (startDateValue.Second >= 0) startFilter &= Builders<datamodel>.Filter.Where(x => x.Date.Second >= startDateValue.Second);

        //        filter &= startFilter;
        //    }

        //    if (endDate.HasValue)
        //    {
        //        var endFilter = Builders<datamodel>.Filter.Empty;
        //        var endDateString = endDate.Value.ToString("yyyy-MM-dd HH:mm:ss tt");

        //        // Năm-tháng-ngày
        //        endFilter &= Builders<datamodel>.Filter.Where(x => DateTime.Parse(x.Date.ToString("yyyy-MM-dd")) <= DateTime.Parse(endDateString.Substring(0, 10)));

        //        // Tháng-ngày-giờ
        //        endFilter &= Builders<datamodel>.Filter.Where(x => DateTime.Parse(x.Date.ToString("yyyy-MM-dd HH:mm:ss")) <= DateTime.Parse(endDateString.Substring(0, 15)));

        //        // Giờ-phút-giây
        //        endFilter &= Builders<datamodel>.Filter.Where(x => DateTime.Parse(x.Date.ToString("HH:mm:ss")) <= DateTime.Parse(endDateString.Substring(11, 8)));

        //        // Năm
        //        if (endDate.Value.Year > 0) endFilter &= Builders<datamodel>.Filter.Where(x => x.Date.Year <= endDate.Value.Year);

        //        // Tháng
        //        if (endDate.Value.Month > 0) endFilter &= Builders<datamodel>.Filter.Where(x => x.Date.Month <= endDate.Value.Month);

        //        // Ngày
        //        if (endDate.Value.Day > 0) endFilter &= Builders<datamodel>.Filter.Where(x => x.Date.Day <= endDate.Value.Day);


        //        // Giờ
        //        if (endDate.Value.Hour >= 0) endFilter &= Builders<datamodel>.Filter.Where(x => x.Date.Hour <= endDate.Value.Hour);

        //        // Phút
        //        if (endDate.Value.Minute >= 0) endFilter &= Builders<datamodel>.Filter.Where(x => x.Date.Minute <= endDate.Value.Minute);

        //        // Giây
        //        if (endDate.Value.Second >= 0) endFilter &= Builders<datamodel>.Filter.Where(x => x.Date.Second <= endDate.Value.Second);

        //        filter &= endFilter;
        //    }

        //    return await currentCollection.Find(filter).ToListAsync();

        //}









        public async Task Post(datamodel data)
        {
            await currentCollection.InsertOneAsync(data);
        }


        //public async Task<datamodel> GetCurrentAsync(Guid id)
        //{
        //    var filter = filterBuilder.Eq(item => item.Id, id); // Id phải khớp với Id nhận được từ tham số 
        //    return await currentCollection.Find(filter).SingleOrDefaultAsync(); // Phương thức SingleorDefult chỉ cho phép trả về 1 dữ liệu bất kì tìm thấy 
        //}






        //public async Task DeleteCurrentAsync(Guid id)
        //{
        //    var filter = filterBuilder.Eq(item => item.Id, id); // Lọc theo Id
        //    await currentCollection.DeleteOneAsync(filter); // Mỗi lần thực thi sẽ xóa theo id truyền vào 
        //}



        //public async Task UpdateCurrentAsync(datamodel data)
        //{
        //    var filter = filterBuilder.Eq(exsitingItem => exsitingItem.Id, data.Id); // Lọc theo id 
        //    await currentCollection.ReplaceOneAsync(filter, data);
        //}
    }
}
