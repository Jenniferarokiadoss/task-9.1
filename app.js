const MongoClient = require('mongodb').MongoClient;
const connectionURL = 'mongodb://Jennifer:mypassword@localhost:27017/mydatabase';

MongoClient.connect(connectionURL, function(err, client) {
    if (err) {
        console.error('Error connecting to MongoDB:', err);
        return;
    }

    // Use the database connection for further operations
    const db = client.db('myapp');
    console.log('Connected to MongoDB');


    // Perform CRUD operations or other database tasks
});
