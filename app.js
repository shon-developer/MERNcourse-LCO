require(`dotenv`).config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const authRoutes = require("./routes/auth.js");

// DB Connection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopolofy: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
  })
  .catch(console.log("DB GOT OOOPSSS"));
//Milddlewares
app.use(bodyParser.json);
app.use(cookieParser);
app.use(cors());

//My Routes
app.use("/api/hitesh", authRoutes);
//PORT
const PORT = process.env.PORT || 8000;
app.use("/api", authRoles);
//Starting a server
app.get("/", (req, res) => {
  res.send(`<h1>Server is up and running</h1>`);
});

app.get("/signout", (req, res) => {
  res.send(`You are signed out`);
});

const port = process.env.PORT || 8000;

app.listen(PORT, (req, res) => {
  console.log(`Server is running at PORT: ${PORT}`);
});
