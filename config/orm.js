var conn = require('../config/connection.js');

function printQuestionMarks(num) 
{
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push('?');
	}

	return arr.toString();
}
function objToSql(ob) {
	// column1=value, column2=value2,...
	var arr = [];

	for (var key in ob) {
		if (ob.hasOwnProperty(key)) {
			arr.push(key + '=' + ob[key]);
		}
	}

	return arr.toString();
}

var orm = {
	        selectAll: function (tableInput, cb) 
	        {
		      var queryString = 'SELECT * FROM ' + tableInput + ';';
		      conn.query(queryString, function (err, result)
		      {
			    if (err) throw err;
			    console.log("results for selectAll " + result);
			    cb(result);
		      });
	        },
		   insertOne: function(table, cols, vals, cb) 
		   {
		   	console.log(table + "  table");
		      var queryString = 'INSERT INTO ' + table;
              queryString = queryString + ' (';
		      queryString = queryString + cols.toString();
		      queryString = queryString + ') ';
		      queryString  = queryString + 'VALUES (';
		      queryString = queryString + printQuestionMarks(vals.length);
		      queryString = queryString + ') ';

		      console.log(queryString);

		      conn.query(queryString, vals, function (err, result) 
		      {
			    if (err) throw err;
			    cb(result);
		      });
	       },
		    updateOne:  function (table, objColVals, condition, cb)
		               {
		               	console.log("start of updateOne");
		                 var queryString = 'UPDATE ' + table;
		                 queryString = queryString + ' SET ';
		                 queryString = queryString +   'devoured = false';          //objToSql(objColVals);
		                 queryString = queryString + ' WHERE ';
		                 queryString = queryString + condition;

		                 console.log(queryString + " queryString + condition " + condition);
		                 conn.query(queryString, function (err, result)
		                 {
			                if (err) throw err;
			                cb(result);
		                 });
	                    }
		};
	module.exports = orm;

	// connection.query('UPDATE movies SET movie = ? WHERE id = ?', [req.body.movie, req.body.id], function(err, result) {
 //      if (err) throw err;
    //  res.redirect('/');



