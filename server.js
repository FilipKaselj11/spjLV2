var http = require('http');
var sIme = "Filip";

http.createServer(function (request, respond) {
    respond.writeHead( 200, {'Content-Type': 'text/plain; charset=utf-8' });
    respond.write(sIme);
    respond.end();
}).listen(8080);