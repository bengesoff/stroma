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
		// Returns cursor with all students with correct name
		r.table('students').filter({name: name}).run(connection, function(err, cursor) {
			if (err) throw err;
			cursor.toArray(function(err, result) {
				if (err) throw err;
				// If there is only one student returned, check the PIN is correct and return the status.
				if (result.length == 1 && result[0].PIN == pin) {
					callback(result[0].status);
				}
				// If there is more than one, choose the one with the matching PIN
				else if (result.length > 1) {
					for (var i = result.length - 1; i >= 0; i--) {
						if(result[i].PIN == pin) {
							callback(result[i].status);
						}
					};
				}
				// TODO: Provide error if no matching users found.
			});
		});
	},
	sign_in: function(name, pin) {
		// TODO: Add update to db and change student status
	},
	sign_out: function(name, pin) {
		// TODO: Add update to db and change student status
	},
	get_profile: function(name, pin, callback) {

	},
	update_profile: function(name, pin, form) {

	},
	register: function(name, form, status, pin) {

	},
	get_all: function(callback) {
		// TODO: get all students in table and return in way ready to export as Excel
	}
};
exports.db = db;