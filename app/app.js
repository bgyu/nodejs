var http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Node.js</h1>')
    res.write('<h2>This is fantastic!</h2>')
    res.end('<p>Hello world</p>')
}).listen(8888);

console.log('HTTP server is listening at port 8888');
