const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require("morgan");
const authRoutes = require("./router/auth");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const cors = require("cors");
const feedparser = require("feedparser");
const { default: axios } = require('axios');

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

app.get("/fetch-python-data", async (req, res) => {
    const rssUrl = "https://news.google.com/rss/search?q=%EA%B3%A0%EB%93%B1%ED%95%99%EC%83%9D&hl=ko&gl=KR&ceid=KR:ko";
    try {
        const response = await axios.get(rssUrl);
        const feed = response.data;
        const items = feed.items.map(item => ({
            title: item.title,
            link: item.link,
        }));
        res.json(items);
    } catch(error) {
        res.status(500).json({ error : "Failed data"});
    }
});

app.get("/fetch-deepfake-data", async (req, res) => {
    const url = `https://search.naver.com/search.naver?where=news&query=딥페이크`;
    try {
        const response = await axios.get(url);
        const titles = response.data;
        const deepfakeTitles = [];
        res.json(deepfakeTitles);
    } catch(error) {
        res.status(500).json({ error : "Failed Deepfake"});
    }
})

console.log(authRoutes);

module.exports = app;