const express = require('express');
const authRoutes = require('./src/router/auth');
const cookieParser = require('cookie-parser');
const logger = require("morgan");

const app = express();

// 미들웨어 설정    
app.use(logger("dev"))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// 라우트 설정
app.use('/api/auth', authRoutes);

console.log(authRoutes);

module.exports = app;