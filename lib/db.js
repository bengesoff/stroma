r = require('rethinkdb');
var connection = null;

var db = function(callback) {
	r.connect( {
		host: '192.168.1.17',
		port: '28015',
		db: 'stroma'
	}, function(err, conn) {
		if (err) throw err;
		connection = conn;
		callback();
	});
};
db.prototype = {
	check: function(name, pin, callback) {
		r.table('students').filter({name: name}).run(connection, function(err, cursor) {
			if (err) throw err;
			cursor.toArray(function(err, result) {
				if (err) throw err;
				callback(result);
			});
		});
	},
	sign_in: function(name, pin) {

	},
	sign_out: function(name, pin) {

	},
	get_profile: function(name, pin, callback) {

	},
	update_profile: function(name, pin, form) {

	},
	register: function(name, form, status, pin) {

	},
	get_all: function(callback) {

	}
};
exports.db = db;