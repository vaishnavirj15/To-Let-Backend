const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { connectDB } = require("./config/db.js");

dotenv.config();

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "20kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`✌ server is running on port : ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("MONGODB Connection Failed !!", error);
  });
