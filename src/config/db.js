const admin = require("firebase-admin");
const dotenv = require('dotenv');

dotenv.config();

const serviceAccount = {
    tpye: "service_account",
    project_id: process.env.PROJECT_ID || "default_project_id",
    apiKey: process.env.API_KEY || "default_api_key",
    authDomain: process.env.AUTH_DOMAIN || "default_auth_domain",
    storageBucket: process.env.STORAGE_BUCKET || "default_storage_bucket",
    messagingSenderId: process.env.MESSAGING_SENDER_ID || "default_messaging_sender_id",
    appId: process.env.APP_ID || "default_app_id",
    measurementId: process.env.MEASUREMENT_ID || "default_measurement_id"
};

console.log("Service Account", serviceAccount);

if (!serviceAccount.private_key || typeof serviceAccount.project_id !== "string") {
    console.error("Invalid or missing project_id in service account object.");
}

admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    apiKey: serviceAccount.apiKey,
    authDomain: serviceAccount.authDomain,
    storageBucket: serviceAccount.storageBucket,
    projectId: serviceAccount.project_id,
    messagingSenderId: serviceAccount.messagingSenderId,
    appId: serviceAccount.appId,
    measurementId: serviceAccount.measurementId,
});

const db = admin.firestore();
const auth = admin.auth();

module.exports = { db, auth };
