const path = require("path");

const express = require("express");

const contactusController = require("../controllers/contactus");

const router = express.Router();

router.get("/contactus", contactusController.getContactUsPage);
//router.post("/success", contactusController.postContactUsPage);

module.exports = router;
