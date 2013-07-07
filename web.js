var express = require('express');


var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var buffer = new Buffer(16);
    fs.readSync('index.html', buffer,0,16,0);
    response.send(buffer);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
