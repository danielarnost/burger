var orm = require('../config/orm.js');
var burger = {
	selectAll: function(callback){
		orm.selectAll(function(res){
			callback(res);
		});
	},
	insertOne: function(burgerName, callback){
		orm.insertOne(burgerName, function(res){
			callback(res);
		});
	},
	updateOne: function(condition, callback){
		orm.updateOne(condition, function(res){
			callback(res);
					});
	},
	deleteOne: function(condition, callback){
		orm.deleteOne(condition, function(res){
			callback(res);
		});
	}	

};

module.exports = burger;