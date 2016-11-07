var connection = require('./connection.js');

var orm = {
	
	selectAll: function(callback){
		connection.query('SELECT * FROM burgers', function(err, result){
			if(err) throw err;
			callback(result);
		});
	},
	
	insertOne: function(burgerName, callback){
		connection.query('INSERT INTO burgers (burger_name) VALUES (?)', [burgerName], function(err, result){
			if(err) throw err;
			callback(result);
		});
	},
	
	updateOne: function(condition, callback){
		connection.query('UPDATE burgers SET devoured = 1 WHERE id = ?', [condition], function(err, result){
			if(err) throw err;
			callback(result);
			});
	},

	deleteOne: function(condition, callback){
		connection.query('DELETE FROM burgers WHERE id = ?', [condition], function(err, result){
			if(err) throw err;
			callback(result);
		});
	}


};
module.exports = orm;