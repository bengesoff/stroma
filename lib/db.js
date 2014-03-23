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
				if (result.length == 1 && result[0].PIN == pin) {
					callback(result[0].status);
				}
				else if (result.length > 1) {
					for (var i = result.length - 1; i >= 0; i--) {
						if(result[i].PIN == pin) {
							callback(result[i].status);
						}
					};
				}
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