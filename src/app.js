var http = require("http"),
  fs = require("fs");

var handler = function( req, res ) {
  var url = req.url;
  console.log(url);
  fs.readFile("./static" + url, function(err, html){
    var type = "text/plain";
    if ( url.endsWith(".html") ) {
      type = "text/html";
    } else if ( url.endsWith(".css") ) {
      type = "text/css";
    } else if ( url.endsWith(".js") ) {
      type = "application/javascript";
    }
    res.setHeader("content-type",type);
    res.write(html);
    res.end();
  });
};

var server = http.createServer(handler);
server.listen(8085);


