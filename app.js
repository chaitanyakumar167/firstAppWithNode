const express = require("express");
const bodyParser = require("body-parser")

const app = express();

const adminRoute = require('./routes/admin')
const shopRoute = require('./routes/shop')

app.use(bodyParser.urlencoded({extended: true}))

app.use('/admin',adminRoute);
app.use('/shop', shopRoute);

app.use((req, res, next)=>{
  res.status(404).send('<h2>Page not found</h2>')
})
app.listen(4000);
