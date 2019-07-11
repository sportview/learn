var http = require('http');
http.createServer(function(re,res){
    res.writeHead(201,{'content-type':'text/plain'});
    res.end('hello world');
}).listen(8080);
console.log('server running at localhost');