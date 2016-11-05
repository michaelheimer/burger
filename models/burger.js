var orm = require('../config/orm.js');

var Burger = {
                selectAll: function(callBack)
                {
                  orm.selectAll('burgers', function(res)
                  {
                    callBack(res);
                  });
                },
                insertOne: function(cols, vals, callBack)
                {
                  orm.insertOne('burgers',cols, vals, function(res)
                  {
                    callBack(res);
                  });
                },
                updateOne: function(objColVals, condition,callBack)
                {
                  orm.updateOne('burgers', objColVals, condition, function(res)
                  {
                     	 callBack(res);
                  })
                },
              }


module.exports = Burger;

