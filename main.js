const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(__dirname + '/view/js'))
app.use(express.static(__dirname + '/view/css'))
app.use(express.static(__dirname + '/view/img'))

app.get('/', function(req, response) {
  if (req.query.c1 != undefined && req.query.c2 != undefined){
    var c1 = req.query.c1
    var c2 = req.query.c2
    console.log("Received request for:", c1, c2)
    //response.send("Recieved request for champions: " + c1 + ", " + c2)
    connectToDB(c1,c2, response)
  } else {
  response.sendFile(path.join(__dirname + '/view/index.html'));
  } 
})

function connectToDB (c1, c2, response) {
  var MongoClient = require('mongodb').MongoClient 

  // Connection URL
  var url = process.env.MONGODB_URI
  // Use connect method to connect to the server
  MongoClient.connect(url, function(err, client) {
    console.log("Connected successfully to server");
    client.collection('champions').findOne(function getData(err, doc){
      
      //console.log(doc["data"][c1])
      response.send(JSON.stringify([doc["data"][c1], doc["data"][c2]]))
    })
    client.close()
  })
}

function champData(err, doc){
 console.log(doc["data"]["Jax"]) 
}
 
app.listen(process.env.PORT || 5000)
