/* GET home page. */
exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.check = function(req, res){
	// TODO: do the DB and render result
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