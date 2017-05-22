var orm = require("../config/orm.js");

var burger = {
  all: function(cb){
    orm.all("burgers", function(res){
      cb(res);
    });
  },
  create: function(tableInput,cols, vals, cb){
    orm.create(tableInput, cols, vals, function(res){
      cb(res);
    });
  },
  devour: function(tableInput, objColVals, condition, cb){
    orm.devour(tableInput, objColVals, condition, function(res){
      cb(res);
    });
  }
};

module.exports = burger;
