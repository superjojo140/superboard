var express = require("express");
var app = express();
var server = require("http").createServer(app);
var io = require("socket.io")(server);

const dotenv = require("dotenv");
dotenv.config();

import {Change} from "../../frontend/src/types"

 //Verzeichniss für eigene Scripts zur Verfügung stellen
app.use(process.env.HOSTPREFIX, express.static(`${__dirname}/../../dist/`));



//Gloabal Variables
var connections: { [key: string]: any } = [];


//Start Server
server.listen(process.env.PORT);
console.log(`Server running on: ${process.env.HOST}${process.env.HOSTPREFIX}`);



//If a new Client is connected
io.sockets.on("connection", function (socket: any) {
    connections[socket.id] = socket;
    console.log("New Client connected: " + socket.id);


    //Disconnect
    socket.on("disconnect", function (data: string) {
        console.log("Client disconnected");
    });


    //Input from Client
    socket.on("client.change", function (change: Change) {
        console.log(change);
        io.emit("server.change",change);
    });


});