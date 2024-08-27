"use strict"
const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("dwqd");
});

module.exports = app;