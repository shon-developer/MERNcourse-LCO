const express = require("express");

const app = express();

const PORT = 8000;

app.get("/", (req, res) => {
  return res.send("Home Page");
});

app.get("/admin", (req, res) => {
  return res.send("This is admin dashboard");
});

const isAdmin = (req, res) => {
  console.log("isAdmin is running");
  next();
};

app.get("/admin", isLoggedIn, isAdmin, admin);

app.get("/admin", isAdmin, admin);

app.get("/login", (req, res) => {
  return res.send("You are visiting login route");
});

app.get("/signup", (req, res) => {
  return res.send("You are visiting signup route");
});
