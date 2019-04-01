const express = require("express");
const compression = require("compression");
const morgan = require("morgan");
const path = require("path");

const app = express();

app.use(compression());

if (app.get("env") !== "production") {
  app.use(morgan("dev"));
} else {
  app.use(morgan("common"));
}

app.use(express.static("build"));

app.all("*", (_req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

const PORT = parseInt(process.env.PORT, 10) || 3000;
app.listen(PORT, err => {
  if (err) throw err;
  console.log(`Server started on PORT ${PORT}`);
});
