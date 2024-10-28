const express = require("express");
const {register, login} = require("../controllers/authController");
const newsRoutes  = require("../router/news");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/news", newsRoutes);

module.exports = router;