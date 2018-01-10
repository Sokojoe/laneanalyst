const express = require('express')
const app = express()
const path = require('path');

app.use(express.static(__dirname + '/view'));

app.get('/', function(req, response) {
  if (req.query.c1 != undefined && req.query.c2 != undefined){
    console.log(req.query.c1, req.query.c2)
  }
  response.sendFile(path.join(__dirname + '/view/main.html'));
  
});

function connectToDB () {
var MongoClient = require('mongodb').MongoClient, 
	 assert = require('assert');

  // Connection URL
  var url = process.env.MONGODB_URI;
  
  console.log(url)
  // Use connect method to connect to the server
  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
      console.log("Connected successfully to server");
      db.close();
      });
}

app.listen(process.env.PORT || 5000);
