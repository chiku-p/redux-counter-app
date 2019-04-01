const express = require("express");
const compression = require("compression");
const morgan = require("morgan");

const app = express();

app.use(compression());
app.use(morgan("dev"));
app.use(express.static("build"));

app.all("*", (_req, res) => {
  res.sendFile("index.html");
});

const PORT = parseInt(process.env.PORT, 10) || 3000;
app.listen(PORT, err => {
  if (err) throw err;
  console.log(`Server started on PORT ${PORT}`);
});
