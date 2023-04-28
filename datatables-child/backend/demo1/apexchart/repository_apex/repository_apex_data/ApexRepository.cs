using Microsoft.Extensions.Logging;
using MongoDB.Bson;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Threading.Tasks;
using System;
using demo1.apexchart.repository_apex.Interface_apex;
using demo1.apexchart.entities.model_apex;

namespace demo1.apexchart.repository_apex.repository_apex_data
{

    public class ApexRepository : IApexRepository
    {
        private const string databaseName = "Chart";
        private const string collectionName = "ApexChart";

        private readonly IMongoCollection<ApexModel> datasCollection;
        private readonly FilterDefinitionBuilder<ApexModel> filterBuilder = Builders<ApexModel>.Filter;

        public ApexRepository(IMongoClient mongoClient)
        {
            IMongoDatabase database = mongoClient.GetDatabase(databaseName);
            datasCollection = database.GetCollection<ApexModel>(collectionName);
        }
        // ASYNC
        public async Task CreateDataAsync(ApexModel data)
        {
            await datasCollection.InsertOneAsync(data);
        }

        public async Task DeleteDataAsync(Guid id)
        {
            var filter = filterBuilder.Eq(data => data.Id, id);
            await datasCollection.DeleteOneAsync(filter);
        }

        public async Task<ApexModel> GetDataAsync(Guid id)
        {
            var filter = filterBuilder.Eq(data => data.Id, id);
            return await datasCollection.Find(filter).SingleOrDefaultAsync();
        }

        //Parameter
        public async Task<IEnumerable<ApexModel>> GetDatasByElementAsync(DateTimeOffset? start, DateTimeOffset? end)
        {
            var builder = Builders<ApexModel>.Filter;

            var filter = builder.Empty;


            if (start != null)
            {
                filter &= builder.Gte("CreatedDate", start);
            }

            if (end != null)
            {
                filter &= builder.Lte("CreatedDate", end);
            }

            return await Task.FromResult(datasCollection.Find(filter).ToList());
        }


        public async Task<IEnumerable<ApexModel>> GetDatasAsync()
        {
            return await datasCollection.Find(new BsonDocument()).ToListAsync();
        }


        public async Task UpdateDataAsync(ApexModel data)
        {
            var filter = filterBuilder.Eq(existingData => existingData.Id, data.Id);

            await datasCollection.ReplaceOneAsync(filter, data);
        }

    }
}