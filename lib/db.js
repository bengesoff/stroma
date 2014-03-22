r = require('rethinkdb');
var connection = null;
r.connect( {
	host: '192.168.1.17',
	port: '28015',
	db: 'stroma'
}, function(err, conn) {
	if (err) throw err;
	connection = conn;
});
exports.check = function(username, pin) {
	r.table('students').filter({name: username}).run(connection, function(err, result) {
		if (err) throw err;
		console.log(result);
	});
};