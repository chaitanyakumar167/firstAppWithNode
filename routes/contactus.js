const path = require("path");

const express = require("express");
const router = express.Router();

router.get("/contactus", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "views", "contactus.html"));
});
router.post("/success", (req, res, next) => {
  // console.log(req.body);
  res.sendFile(path.join(__dirname, "..", "views", "success.html"));
});

module.exports = router;
