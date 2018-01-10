const express = require('express')
const app = express()
const path = require('path');

app.use(express.static(__dirname + '/view/js'));
app.use(express.static(__dirname + '/view/css'));
app.use(express.static(__dirname + '/view/img'));

app.get('/', function(req, response) {
  if (req.query.c1 != undefined && req.query.c2 != undefined){
    console.log("Received request for:", req.query.c1, req.query.c2)
    response.send("Recieved request for champions: " + req.query.c1 + ", " + req.query.c2)
  } else {
  response.sendFile(path.join(__dirname + '/view/index.html'));
  } 
});

function connectToDB () {
var MongoClient = require('mongodb').MongoClient, 
	 assert = require('assert');

  // Connection URL
  var url = process.env.MONGODB_URI
  
  // Use connect method to connect to the server
  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
      console.log("Connected successfully to server");
      });
}

app.listen(process.env.PORT || 5000)
connectToDB()
