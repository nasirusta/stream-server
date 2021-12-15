const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const indexRouter = require("./routes/indexRouter");

app.use("/", indexRouter);

app.listen(PORT, () => {
  console.log(`Server is runing on ${PORT} port`);
});
