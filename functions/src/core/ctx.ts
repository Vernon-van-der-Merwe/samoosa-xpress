import * as functions from "firebase-functions";
import { initializeApp } from "firebase-admin/app";
import { firestore } from "firebase-admin";

const express = require("express");
const cors = require("cors");
const parser = require("body-parser");

const app = express();
app.use(cors({ origin: true }));
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

const firebaseConfig = {
  apiKey: "AIzaSyDgB6XYi5MWM99dUwxpBOu3OOJfzxoVFJM",
  authDomain: "samoosa-xpress.firebaseapp.com",
  projectId: "samoosa-xpress",
  storageBucket: "samoosa-xpress.appspot.com",
  messagingSenderId: "857308374456",
  appId: "1:857308374456:web:eae79c64f75a379384db4d",
  measurementId: "G-V4CC2SJ2JX",
};

initializeApp(firebaseConfig);
const db = firestore();

export const ctx = {
  app,
  functions,
  db,
};
