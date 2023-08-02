const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const contactusRoutes = require("./routes/contactus");
const successRoutes = require("./routes/success");
const errorController = require("./controllers/error");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(contactusRoutes);
app.use(successRoutes);

app.use(errorController.get404);

app.listen(3000);
