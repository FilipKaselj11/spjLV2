var fs = require('fs');
var mqtt = require('mqtt');

var client = mqtt.connect('mqtt://127.0.0.1');

client.on('connect', function() {
    client.subscribe('temp')
});
console.log('Subsciber #1 is online!');
console.log('Receiving message...');
client.on('message', function(topic, message) {
    context = message.toString();
    console.log(context);
    fs.appendFile('./zad12.txt', context, function (err) {
        if (err) throw err;
        console.log('Snimljeno!');
    });
});
