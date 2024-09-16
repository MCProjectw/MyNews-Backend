const { auth, db } = require("../config/db");

exports.register = async (req, res) => {
    const { email, password, username } = req.body;

    try {
        const userRecord = await auth.createUser({
            email,
            password,
            displayName: username,
        });
        await db.collection("users").doc(userRecord.uid).set({
            username,
            email,
        });
        res.status(201).json({ message: "User registered successfully"});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};

// 로그인 처리
exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const token = req.body.token;  // 클라이언트에서 발급받은 토큰
        const decodedToken = await auth.verifyIdToken(token);

        res.status(200).json({ message: 'Login successful', uid: decodedToken.uid });
    } catch (err) {
        res.status(401).json({ error: 'Invalid login credentials' });
    }
};