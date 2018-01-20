const express = require('express')
const app = express()
const path = require('path')
const fs = require( 'fs')
const exphbs = require('express-handlebars')

app.use(express.static(path.join(__dirname, '/static')))

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.get('/', function(req, res) {
  res.render('search')
})

app.get('/compare', function (req, res) {
  var c1 = req.query.c1
  var c2 = req.query.c2
  connectToDB(c1, c2, res)
})

function connectToDB (c1, c2, res) {
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
      res.render('compare', data)
    })
    client.close()
  })
}

app.listen(process.env.PORT || 5000)
