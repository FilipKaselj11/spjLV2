var rand = require('./slucajanBroj');

var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://127.0.0.1');
client.on('connect', function() {
    console.log('Publisher is online!');
    setInterval(function() {
        var temp = rand.dajSlucajanBroj(10,1000);
        client.publish('temp', 'Random broj: ' + temp);
        console.log('Message sent!');
    }, 5000);
});




