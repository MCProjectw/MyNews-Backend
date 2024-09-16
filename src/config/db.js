const admin = require("firebase-admin");
const dotenv = require('dotenv');

dotenv.config();

const serviceAccount = require("../firebase-sdk-admin.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: `https://${process.env.REACT_APP_FIREBASE_PROJECT_ID}.firebaseio.com`,
});

const db = admin.firestore();
const auth = admin.auth();

module.exports = {db, auth};