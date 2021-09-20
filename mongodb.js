'use strict';

const MongoClient       = require('mongodb').MongoClient;
const configs           = require('./configs');

//  MARK:- Setup MongoDB App
var mongoUrl = process.env.mongoUrl || configs.mongoUrl;
var mongoid = process.env.mongoid || configs.mongoid;

var moClient;

function setupMongoClient(callback) {
    MongoClient.connect(mongoUrl, { useNewUrlParser: true }, function(err, client) {
        if (!err) {
            moClient = client
            callback(true)
        } 
        else {
            console.log(err);
            callback(false);
        }
    })
}

module.exports.setup = function setup() {
    console.log('Setting up MongoDB');
    setupMongoClient(function(success) {
        if (success) {
            console.log("Successfully set up mongo client");
        } 
        else {
            console.log("Unsuccessfully set up mongo client");
        }
    });
};

module.exports.mongodb_client = function returnMongoDBMainObject(callback) {
    callback(moClient);
}

// Create a module export per each collection in MongoDB database
/** Example
    module.exports.collection = function returnMongoCollection(collection, callback) {
        var db = moClient.db(mongoid);
        var collection = db.collection(collection);
        callback(collection);
    }
*/