const WebSocket = require('ws');

const serverAddress = 'wss://victorious-jumbled-property.glitch.me/';

const ws = new WebSocket(serverAddress, { headers: { "user-agent": "Mozilla" } });

ws.on('open', function () {
    ws.send("hello world!");
});

ws.on('message', function (msg) {
    console.log("from server", msg.toString());
});