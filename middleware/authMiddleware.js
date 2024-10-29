const jwt = require('jsonwebtoken');

// JWT 인증 미들웨어
exports.authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.sendStatus(403);

    try {
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) return res.sendStatus(403);
            req.user = user;
            next();
        });
    } catch (error) {
        res.status(401).json({ message: "Not token" });
    }
};

