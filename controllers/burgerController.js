var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

//get the default site
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log("Calling all orders:");
    console.log("hbsObject");
    //calling the index.handlebars and send hbsObject object
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  var tableInput = "burgers";
  var cols = ["burger_name", "devoured"];
  var val = [req.body.burger_name, false];

  burger.create(tableInput, cols, val, function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req,res){
  var tableInput = "burgers";
  var objColVals = {devoured: req.body.devoured};
  var condition = "id = " +req.params.id;

  console.log("condition: ", condition);

// this function has three arguments passing (obj, var, func)
  burger.devour(tableInput, objColVals, condition, function(){
      res.redirect("/");
  });
});


module.exports = router;
