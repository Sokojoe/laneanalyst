const express = require('express')
const app = express()
const path = require('path');

app.use(express.static(__dirname + '/view'));

app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname + '/view/main.html'));
});

function updatedb () {
var MongoClient = require('mongodb').MongoClient, 
	 assert = require('assert');

  // Connection URL
  var url = process.env.MONGODB_URI;

  // Use connect method to connect to the server
  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
      console.log("Connected successfully to server");
        db.close();
	});
}

updatedb()
app.listen(process.env.PORT || 5000)
