var express = require('express'),
	router = express.Router(),
	burger = require('../models/burger.js')

router.get('/', function(req, res){
	res.redirect('/burgers');
});
//loads specific model
router.get('/burgers', function(req, res){
	burger.selectAll(function(data){
		var mysqlData = {burgers: data};
		console.log(mysqlData);
		res.render('index', mysqlData);
	});
});

router.post('/burgers/create', function(req, res){
	burger.insertOne(req.body.name, function(){
		res.redirect('/burgers');		
	});
});

router.put('/burgers/update/:id', function(req, res){
	var condition = req.params.id;
	console.log('condition', condition);
	burger.updateOne(condition, function(){
		res.redirect('/burgers');
	});
});

router.delete('/burgers/delete/:id', function(req, res){
	var condition = req.body.id;
	burger.deleteOne(condition, function(){
		res.redirect('/burgers');
	});
});

module.exports = router;