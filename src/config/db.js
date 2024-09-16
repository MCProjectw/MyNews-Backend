const admin = require("firebase-admin");
const dotenv = require('dotenv');

dotenv.config();

console.log(process.env.FIREBASE_PROJECT_ID);
console.log(process.env.FIREBASE_PRIVATE_KEY);
console.log(process.env.FIREBASE_CLIENT_EMAIL);

const serviceAccount = {
    type: "service_account",
    project_id: process.env.FIREBASE_PROJECT_ID || "default_project_id",
    private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID || "default_private_key_id",
    private_key: process.env.FIREBASE_PRIVATE_KEY
        ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n')
        : "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCAmIwggJeAgEAAoGB...",
    client_email: process.env.FIREBASE_CLIENT_EMAIL || "default_client_email",
    client_id: process.env.FIREBASE_CLIENT_ID || "default_client_id",
    auth_uri: process.env.FIREBASE_AUTH_URI || "https://accounts.google.com/o/oauth2/auth",
    token_uri: process.env.FIREBASE_TOKEN_URI || "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_PROVIDER_CERT_URL || "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url: process.env.FIREBASE_CLIENT_CERT_URL || "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-xyz@nodedb-f0b91.iam.gserviceaccount.com"
};

console.log("Service Account", serviceAccount);

if(!serviceAccount.private_key || typeof serviceAccount.project_id !== "string")
    console.error("Invalid or missing project_id in service account object.");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: `https://${serviceAccount.project_id}.firebaseio.com`,
});

const db = admin.firestore();
const auth = admin.auth();

module.exports = { db, auth };