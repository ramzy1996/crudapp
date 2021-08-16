//third party modules
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");

app.use(cors());

//middleware
app.use(morgan("dev"));
//bodyparser
app.use(express.json());
//router
const infoRouter = require("./router");
app.use("/info", infoRouter);

// app.use("/", (req, res) => {
//   res.json("Hello World");
// });

//listen
app.listen(5000, () => {
  console.log("Server started on 5000");
});

//db connection

mongoose.connect(
  "mongodb://localhost:27017/CrudApp",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log("Database not connected");
    } else {
      console.log("Database connected successfully");
    }
  }
);
