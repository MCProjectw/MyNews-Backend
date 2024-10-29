const express = require("express");
const { register, login } = require("../controllers/authController");
const newsRoutes = require("../router/news");
const { validateRequest } = require("../utils/validate");

const router = express.Router();

router.post("/register", [
    body("email").isEmail().withMessage("이메일 형식이 올바르지 않습니다."),
    body("password").isLength({ min: 8 }).withMessage("비밀번호는 최소 8자 이상이어야 합니다."),
    validateRequest
], register);

router.post("/login", [
    body("email").isEmail().withMessage("이메일 형식이 올바르지 않습니다."),
    body("password").isLength({ min: 8 }).withMessage("비밀번호는 최소 8자 이상이어야 합니다."),
    validateRequest
], login);

router.post("/news", newsRoutes);

module.exports = router;