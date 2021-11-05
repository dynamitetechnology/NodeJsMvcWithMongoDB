
const  mongodb  = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
    MongoClient.connect(
        'mongodb+srv://Surajs338:Surajs338@cluster0.uvaba.mongodb.net/phonebook?retryWrites=true&w=majority'
    ).then(client => {
        console.log('connected')
       _db = client.db();
        callback(client);
    }).catch(err => {
        console.log(err);
        throw err;
    });
};


const getDB = () => {
    if(_db){
        return _db;
    }
    throw 'no database connected'
}

exports.mongoConnect = mongoConnect;
exports.getDB = getDB;
