"use strict"
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const server = require("http").createServer(app);
const socketIO = require('socket.io');
const io = socketIO(server);

app.get("/", (req, res) => {
    res.send("dwqd");
});

app.use(express.static(`${__dirname}/src`));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

io.on('connection', (socket) => {
    console.log("연결 완료");
    socket.on('chatting', (data) => {
        const clientData = data;
        io.emit('chatting', clientData);
    });
});

module.exports = server;