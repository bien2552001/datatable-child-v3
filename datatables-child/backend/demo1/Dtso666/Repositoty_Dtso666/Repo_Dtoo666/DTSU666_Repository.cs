using demo1.Dtso666.Entities_Dtso666;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Threading.Tasks;
using System;
using demo1.Dtso666.Repositoty_Dtso666.Interface;
using demo1.Dtso666.Dto_Dtso666;
using Microsoft.AspNetCore.Mvc;
using System.Xml.Linq;

namespace demo1.Dtso666.Repositoty_Dtso666.Repo_Dtoo666
{
    public class DTSU666_Repository: IDTSU666_Repository
    {
        private const string databaseName = "DTSU666";   // Thuộc tính tên cơ sở dữ liệu 

        private const string collectionName = "value"; // Thuộc tính tên của bộ sưu tập 

        private readonly FilterDefinitionBuilder<DTSU666_Model> filterBuilder = Builders<DTSU666_Model>.Filter; // Thuộc tính bộ lọc 

        private readonly IMongoCollection<DTSU666_Model> currentCollection; // Tạo bộ sưu tập từ lớp Item

        public DTSU666_Repository()
        {
        }

        public DTSU666_Repository(IMongoClient mongoClient)
        {
            IMongoDatabase database = mongoClient.GetDatabase(databaseName); // Tham chiếu đến tên cơ sở dữ liệu 

            currentCollection = database.GetCollection<DTSU666_Model>(collectionName);// Tham chiếu đến tên bộ sưu tập 

        }




        public async Task CreateAsync(DTSU666_Model data)
        {
            await currentCollection.InsertOneAsync(data);
        }


        public async Task<IEnumerable<DTSU666_Model>> GetAllAsync(DTSU666_DataShapping_Dto repuestShapping, DateTimeOffset? start, DateTimeOffset? end)
        {
            var builder = Builders<DTSU666_Model>.Filter;

            var filter = builder.Empty;

            if (start != null)
            {
                filter &= builder.Gte("Date", start);
            }

            if (end != null)
            {
                filter &= builder.Lte("Date", end);
            }

            var cursor = await currentCollection.FindAsync(filter);
            return await cursor.ToListAsync();
        }
       


    }
}

