const express = require("express");
const app = express();
const stringifyObject = require("stringify-object");

const port = 3000;

app.get("*", (req, res) => {
  res.send(`Hello, ${stringifyObject(req.url)}`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
