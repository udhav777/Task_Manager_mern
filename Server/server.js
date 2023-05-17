const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const Task = require("./module/taskModule");
const taskRoutes = require("./routes/taskRoutes");
const cors = require("cors");
const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//Routes
app.use(taskRoutes);
mongoose
  .connect(process.env.DB)
  .then((res) => {
    console.log("database is connected");
    app.listen(port, () => {
      console.log("server is running at " + port);
    });
  })
  .catch((err) => console.log(err));
