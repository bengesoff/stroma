var data = require('../lib/db.js').db;

// Execute db constructor - connecting etc
var db = new data(function() {
    console.log('connected to db');
});

/* GET home page. */
exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.check = function(req, res){
	db.check(req.body.username, req.body.pin, function(result) {
		var notresult = null;
		if(result == 'in') {
			notresult = 'out';
		}
		else if (result == 'out') {
			notresult = 'in';
		}
		res.render('check', { title: 'Stroma', signedin: result, notsignedin: notresult });
	});
};

exports.signin = function(req, res){
	// TODO: do DB
};

exports.signout = function(req, res){
	// TODO: do DB
};

exports.register = function(req, res){
	// TODO: send register page
};

exports.submit_register = function(req, res){
	// TODO: do DB
};

// TODO: profile updates
