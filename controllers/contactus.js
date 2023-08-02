const path = require("path");

exports.getContactUsPage = (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "views", "contactus.html"));
};
