var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");


// router.get("/",function(req, res){
//   res.redirect("/burgers");
// });

router.get("/", function(req, res) {
  burger.all(function(burgerData) {
      res.render("index", {burger_data: burgerData});   
  });
});

router.post("/create", function(req, res) {
  burger.create(req.body.burger_name, function(result){
  console.log(result);
  res.redirect("/");
  });
    

});

router.put("/update", function(req, res) {
  burger.update(req.body.burger_id, function(result){
    console.log(result);
    res.redirect("/");
  });

});

// Export routes for server.js to use.
module.exports = router;
