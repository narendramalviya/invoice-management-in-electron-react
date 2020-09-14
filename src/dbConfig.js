
var mysql = window.require("mysql");
console.log("dbConfig");
// Add the credentials to access your database
var connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "12345", // or the original password : 'apaswword'
	database: "mysql",
});

// connect to mysql
connection.connect(function (err) {
	// in case of error
	if (err) {
		console.log("error code ", err.code);
		console.log("err fatal", err.fatal);
	} else {
		console.log("db connected");
	}
});

// function testFun() {
// 	console.log("testFun called");
// 	let $sql = `SELECT * FROM user`;

// 	connection.query($sql, function (err, rows, fields) {
// 		if (err) {
// 			console.log("An error ocurred performing the query.");
// 			console.log(err);
// 			return;
// 		}
// 		console.log("Query succesfully executed", rows);
// 	});
// }
// Close the connection
module.exports.connection = connection;