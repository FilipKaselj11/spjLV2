var http = require('http');
var rand = require('./slucajanBroj');
http.createServer(function (request, respond) {
    respond.writeHead( 200, {'Content-Type': 'text/plain; charset=utf-8' });
    var s="";
    for(var i = 0; i<10; i++)
    {
        s =s + String(rand.dajSlucajanBroj(1,20)+"\n");
    }

    respond.write(s);
    respond.end();
}).listen(8000);