using demo1.apexchart.entities.model_apex;
using demo1.apexchart.repository_apex.Interface_apex;
using MongoDB.Bson;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Threading.Tasks;
using System;
using demo1.currentchart.repository_current.Interface_Current;
using demo1.currentchart.entities.Model_Current;

namespace demo1.currentchart.repository_current.Repository_Current
{
    public class CurrentRepo : ICurrentRepo
    {
        private const string databaseName = "Current";
        private const string collectionName = "CurrentChart";

        private readonly IMongoCollection<Current_Model> datasCollection;
        private readonly FilterDefinitionBuilder<Current_Model> filterBuilder = Builders<Current_Model>.Filter;

        public CurrentRepo(IMongoClient mongoClient)
        {
            IMongoDatabase database = mongoClient.GetDatabase(databaseName);
            datasCollection = database.GetCollection<Current_Model>(collectionName);
        }
        // ASYNC
        public async Task CreateDataAsync(Current_Model data)
        {
            await datasCollection.InsertOneAsync(data);
        }

     

        //Parameter
        public async Task<IEnumerable<Current_Model>> GetDatasByElementAsync(DateTimeOffset? start, DateTimeOffset? end)
        {
            var builder = Builders<Current_Model>.Filter;

            var filter = builder.Empty;


            if (start != null)
            {
                filter &= builder.Gte("Date", start);
            }

            if (end != null)
            {
                filter &= builder.Lte("Date", end);
            }

            var cursor = await datasCollection.FindAsync(filter);
            return await cursor.ToListAsync();
        }



    }
}
