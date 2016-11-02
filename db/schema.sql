var mysql = require('mysql');
var connection = mysql.createConnection({
	port: 3306,
	host: 'localhost',
	user: 'root',
	password: 'Kyanite@55',
	database: 'cat_db'
});

connection.connect(function (err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers
(
	id int (13) NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN NOT NULL,
	date TIMESTAMP,
	PRIMARY KEY (id)
	);