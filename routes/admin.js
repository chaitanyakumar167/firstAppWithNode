const express = require("express");

const router = express.Router();
router.get('/add-product', (req, res, next) => {
    res.send('<form action="/admin/add-product" method="POST" ><input type="text" name="productName"><input type="number" name="productSize"><button type="submit">Add Product</button></form>')
  });
  
// if methods are different we can use same path 
router.post('/add-product', (req, res, next)=>{
    console.log(req.body)
    res.redirect('/')
  })

module.exports = router;