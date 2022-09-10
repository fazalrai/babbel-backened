const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");

const { userRouter } = require("./routes/user-router");
const { languageRouter } = require("./routes/langauge-router");
const { lessonRouter } = require("./routes/lesson-router");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors("*"));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,Authorization"
  );
  if (req.method == "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT,POST,PATCH,DELETE");
    res.status(200).json({});
  }

  next();
});

app.use("/user", userRouter);
app.use("/language", languageRouter);
app.use("/lesson", lessonRouter);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`server is running on port ${port}`));
