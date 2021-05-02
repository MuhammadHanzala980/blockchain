"use strict";
// const dotenv = require("dotenv");
const assert = require("assert");

// dotenv.config();

// const { PORT, HOST, HOST_URL } = process.env;

assert(9080, "PORT is required");
assert("localhost", "HOST is required");

module.exports = {
  port: 9080,
  host: "localhost",
  url: "http://localhost:8080",

  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  firebaseConfig: {
    apiKey: "AIzaSyAyN5n8uauSZNBuvaI6-DIzkG9oSns3OoQ",
    authDomain: "test-bf1d2.firebaseapp.com",
    databaseURL: "https://test-bf1d2-default-rtdb.firebaseio.com",
    projectId: "test-bf1d2",
    storageBucket: "test-bf1d2.appspot.com",
    messagingSenderId: "337546662015",
    appId: "1:337546662015:web:bcce61ab5f90afdd35af4a",
    measurementId: "G-JC59N7E9VD",
  },
};
