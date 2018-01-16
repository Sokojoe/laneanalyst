const express = require('express')
const app = express()
const path = require('path')
const fs = require( 'fs')
const handlebars = require('handlebars')

app.use(express.static(__dirname + '/static'))

app.get('/', function(req, response) {
  response.sendFile(path.join(__dirname + '/view/index.html'));
})

app.get('/compare', function (req, res) {
  fs.readFile(path.join(__dirname + '/view/compare.html'), 'utf-8', function(err, src) {
    var c1 = req.query.c1
    var c2 = req.query.c2
    connectToDB(c1, c2, res, src)
  })
})

function connectToDB (c1, c2, res, src) {
  var MongoClient = require('mongodb').MongoClient
  // Connection URL
  var url = process.env.MONGODB_URI
  // Use connect method to connect to the server
  MongoClient.connect(url, function(err, client) {
    client.collection('champions').findOne(function getData(err, doc){
      var data = {
        c1: doc["data"][c1],
        c2: doc["data"][c2]
      }
      var template = handlebars.compile(src);
      var html = template(data);
      res.send(html)
    })
    client.close()
  })
}

app.listen(process.env.PORT || 5000)
