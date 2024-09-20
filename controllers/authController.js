// controllers/authController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// 회원가입 로직
exports.register = async (req, res) => {
    const { email, password } = req.body;

    try {
        // 비밀번호 해시화
        const hashedPassword = await bcrypt.hash(password, 10);

        console.log(hashedPassword);

        // 새 유저 생성
        const newUser = new User({ username:email, password: hashedPassword });
        console.log(newUser);
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully!' });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Error registering user' });
    }
};

// 로그인 로직
exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // 유저 찾기
        const user = await User.findOne({ username : email });
        if (!user) {
            return res.status(400).json({ error: 'Invalid username or password' });
        }

        // 비밀번호 비교
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid username or password' });
        }

        // JWT 토큰 발급
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: 3600
        });

        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error logging in' });
    }
};
