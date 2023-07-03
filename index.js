const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

// port
const port = 5000;

//import router
const userRouter = require("./src/routers/user");
const flightRouter = require("./src/routers/flight");

// initialize routes
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use(morgan("combined"));

// use Router
app.use(userRouter);
app.use(flightRouter);

//CSP
app.use(helmet());

// app start
const appStart = () => {
  try {
    app.listen(port, () => {
      console.log("The app running on port " + port);
    });
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};

appStart();

app.get("/", (req, res) => {
  res.send("Hello, this is API for Ankasa Ticketing");
});

// Export the Express API
module.exports = app;
