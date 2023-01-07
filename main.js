var WebSocketServer = require("ws").Server;

//creating a websocket server
wss = new WebSocketServer({ port: 8800, host: "localhost" });

//information
console.log("[INFO]BROADCASTING SERVER IS RUNNING ON PORT 8080 IP 192.168.254.61");

//connected clients list
let clients = [];

//message sent by
let sent_by;

//to do when connected to websocket
wss.on("connection", function (ws, req) {
    //adding a connection to clients list
    clients.push(ws);

    //to do when message is received
    ws.on("message", function (message) {

        //updating the sent by variable
        sent_by = ws;

        //calling sendall function to broadcast message
        sendAll(message.toString());
    });

    //information
    console.log("[INFO]NEW CLIENT JOINED", "[CLIENT COUNT]", clients.length, "[TIME]", Date());
});

//function to broadcast message to all connected clients
function sendAll(message) {
    
    //looping through clients from client list
    for (var i = 0; i < clients.length; i++) {
        if (sent_by == clients[i]) {
            continue;
        } else {
            //sending message to the client
            clients[i].send(message);
        }
    }
}