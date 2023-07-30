// Create web server using node.js
// Run it using: node comments.js

// Load the http module to create an http server.
var http = require('http');
var url = require('url');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  //console.log(request.url);
  var url_parts = url.parse(request.url, true);
  var query = url_parts.query;
  var callback = query.callback;
  var data = {
    "status": "ok",
    "data": [
      {
        "id": 1,
        "user": "johndoe",
        "comment": "This is a test comment"
      },
      {
        "id": 2,
        "user": "janedoe",
        "comment": "This is another test comment"
      }
    ]
  };
  response.writeHead(200, {"Content-Type": "application/json"});
  response.write(callback + '(' + JSON.stringify(data) + ');');
  response.end();
});

// Listen on port 8000, IP defaults to
