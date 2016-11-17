var mysql = require('mysql');
var source = {
	
localhost:{
	port: 3306,
	host: 'localhost',
	user: 'root',
	password: 'Kyanite@55',
	database: 'burgers_db'
			},
 jawsDB: {
        port: 3306,
        host: 'enqhzd10cxh7hv2e.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'fctrltohm7axdmwp',
        password: "e4gi3ibn2ih9izoj@enqhzd10cxh7hv2e",
        database: "k2uvg0tggsovzoex"
		}
}
var connection = mysql.createConnection( source.jawsDB);

connection.connect(function (err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('connected as id ' + connection.threadId);
});

module.exports = connection;


//mysql://OLDUSER:OLDPASS@OLDHOST/OLDDATABASE?…