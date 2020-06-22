const express = require("express");
const defaultRouter = require("./routes/defaultRouter");
const app = express();

const {
  PORT = 4000,
} = process.env;

// app.use(express.static('webclient/build'));
// app.use(express.static('build'));

if (process.env.NODE_ENV === "development") {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
}

app.use("/", defaultRouter);

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}.`)
);
