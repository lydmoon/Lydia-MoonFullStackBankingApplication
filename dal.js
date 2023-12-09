const MongoClient = require('mongodb').MongoClient;
const bcrypt = require('bcrypt');
const url = 'mongodb://localhost:27017/myproject';
let db = null;

// connect to mongo
const dbPromise = MongoClient.connect(url, { useUnifiedTopology: true })
.then(client => {
    console.log('Connected to MongoDB');
    return client.db("myproject");
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1);
  });

// create user account
function create(name, email, password) {
  return dbPromise.then(db => {
    const collection = db.collection("users");
    const hashedPassword = bcrypt.hashSync(password, 10); 
    const doc = { name, email, password, balance: 0 };
    return collection.insertOne(doc)
    .then(result => {
    console.log(result);
    return result.ops?.[0];
  })
  .catch(error => {
    console.error('Error inserting document:', error);
    throw error; 
  });
});
}

// login user
function find(email) {
    return dbPromise.then((db) => {
      const collection = db.collection('users');
      return collection.findOne({ email });
    });
  }
  


// find user account
function find(email) {
    return dbPromise.then(db => {
      const collection = db.collection("users");
      return collection.find({ email }).toArray();
    });
  }
  
  // update - deposit/withdraw amount
  function update(email, amount) {
    return dbPromise.then(db => {
      const collection = db.collection("users");
      return collection.findOneAndUpdate(
        { email },
        { $inc: { balance: amount } },
        { returnOriginal: false }
      );
    });
  }
  
  // all users
  function all() {
    return dbPromise.then(db => {
      const collection = db.collection("users");
      return collection.find({}).toArray();
    });
  }
  
  module.exports = { create, find, update, all };
  