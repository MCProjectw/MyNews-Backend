const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/highschool", async (req, res) => {
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
        res.status(500).json({ error : "Failed response data"});
    }
});

router.get("/deepfake", async (req, res) => {
    const url = `https://search.naver.com/search.naver?where=news&query=딥페이크`;
    try {
        const response = await axios.get(url);
        const titles = response.data;
        const deepfakeTitles = [];
        res.json(deepfakeTitles);
    } catch(error) {
        res.status(500).json({ error : "Failed response Deepfake News"});
    };
});

module.exports = router;