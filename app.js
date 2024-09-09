"use strict"
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const server = require("http").createServer(app);
const socketIO = require('socket.io');
const { session } = require("passport");
const passport = require('passport');
const io = socketIO(server);
const authRoutes = require("./src/router/index");

app.use(express.static(`${__dirname}/src`));
app.use(bodyParser.json());

app.use(session({ secret: 'SECRET_KEY', resave: false, saveUninitalized: true}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', authRoutes);

app.use(bodyParser.urlencoded({extended: true}));

io.on('connection', (socket) => {
    console.log("연결 완료");
    socket.on('chatting', (data) => {
        const clientData = data;
        io.emit('chatting', clientData);
    });
});

module.exports = server;