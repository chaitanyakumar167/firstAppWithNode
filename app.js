const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("these is 1st middleware ");
  next();
});
app.use((req, res, next) => {
  res.send("<h1>Hello from express</h1>");
});
app.listen(4000);
