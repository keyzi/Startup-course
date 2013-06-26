//var express = require('express');
//
var fs = require('fs');
var outfile = "hello.txt";
var out = "A startup is a business built to grow rapidly.\n";
fs.writeFileSync(outfile, out);
console.log("Script: " + outfile + "\nWrote: " + out + "To: " + outfile);

//var app = express.createServer(express.logger());

//app.get('/', function(request, response) {
//  response.send('Hello World!');
//});

//var port = process.env.PORT || 5000;
//app.listen(port, function() {
//  console.log("Listening on " + port);
//});
