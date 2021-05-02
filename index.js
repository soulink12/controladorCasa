const firebase = require("firebase/app");
const admin = require('firebase-admin');
const { webHookClient} = require('@google-cloud/dialogflow-cx')

firebase.initializeApp();