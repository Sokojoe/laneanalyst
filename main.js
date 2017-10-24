const express = require('express')
const app = express()
const path = require('path');

app.use(express.static(__dirname + '/view'));

app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname + '/view/main.html'));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
