var http = require("http"),
  fs = require("fs");

var handler = function( req, res ) {
  fs.readFile("./static/index.html", function(err, html){
    res.write(html);
    res.end();
  });
};

var server = http.createServer(handler);
server.listen(8085);


