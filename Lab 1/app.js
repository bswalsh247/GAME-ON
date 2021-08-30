var express = require('express')
var os = require("os");
var hostname = os.hostname();
var app = express()

app.get('/', function(req, res) {
  res.send('Hello world from ' + hostname + '! Your app is up and running in a cluster!\n'
    +'Bluepoints are cool, but Bitcoin is cooler -> 38MJEPrkVmp3FRdRgq4r97qjY5xgFhz2QB')
})
app.listen(8080, function() {
  console.log('Sample app is listening on port 8080.')
})
