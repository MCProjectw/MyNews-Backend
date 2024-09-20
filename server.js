const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require("morgan");
const path = require("path");
const authRoutes = require("./router/auth");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

connectDB();

const app = express();

// 미들웨어 설정    
app.use(logger("dev"))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors())

// 라우트 설정
app.use('/api/auth', authRoutes);

console.log(authRoutes);

module.exports = app;