var http = require('http');
var data= require("./osobe");

console.log("kreiram server");
http.createServer(function (request, respond) {
    respond.writeHead( 200, {'Content-Type': 'text/plain; charset=utf-8' });   
 
    data.forEach(function(o)
    {
        respond.write(o.age + " " + o.name +" "+ o.company + "\n");
    });
    respond.end();
}).listen(8000);