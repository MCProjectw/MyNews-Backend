const express = require('express');
const authRoutes = require('./src/router/auth');
const cookieParser = require('cookie-parser');

const app = express();

// 미들웨어 설정
app.use(express.json());
app.use(cookieParser());

// 라우트 설정
app.use('/api/auth', authRoutes);

// 서버 실행
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });
