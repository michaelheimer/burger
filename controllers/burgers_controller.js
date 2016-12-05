var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');


router.get('/', function (req, res) 
{
	res.redirect('/burger');
});

router.get('/burger', function (req, res) 
{
   burger.selectAll(function (data)
   {

	 var hbsObject = { burger: data };
	 console.log(hbsObject);
	 res.render('index', hbsObject);
   });
});

router.post('/burger/insertOne', function (req, res) 
{
	console.log("this is workign");
	burger.insertOne(['burger_name', 'devoured'], [req.body.burger_name, req.body.devoured], function () 
	{
		res.redirect('/burger');
	});
});

router.put('/burger/updateOne/:id', function (req, res) 
{
	console.log("inside the put updateOne");
	var condition = 'id = ' + req.params.id;
    console.log('condition ', condition);
    console.log(req.body.devoured + " req.body.devoured");
	burger.updateOne({devoured: req.body.devoured }, condition, function () 
	{
		res.redirect('/burger');
	});
});

module.exports = router;
