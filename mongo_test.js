const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'myproject';

async function connectToMongoDB() {
  const client = new MongoClient(url, { useNewUrlParser: true });

  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db(dbName);

    var name = 'user' + Math.floor(Math.random() * 10000);
    var email = name + '@mit.edu';

    var collection = db.collection('customers');
    var doc = { name, email };

    const result = await collection.insertOne(doc);
    console.log('Document inserted with _id:', result.insertedId);

    const customers = await collection.find().toArray();
    console.log('Collection:', customers);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  } finally {
    await client.close();
    console.log('Disconnected from MongoDB');
  }
}

connectToMongoDB();
