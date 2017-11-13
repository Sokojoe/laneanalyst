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

function getChampData() {
    var request = require("request");
    var api_url = "https://na1.api.riotgames.com/lol/static-data/v3/champions?locale=en_US&tags=stats&dataById=false&api_key=" + process.env.RIOT_API;
        console.log(api_url);
        var data = request({url: api_url, json: true}, function(err, res, json){
        console.log(json);   
        });
    
}

updatedb();
getChampData();
app.listen(process.env.PORT || 5000);
