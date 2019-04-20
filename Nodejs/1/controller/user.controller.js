var db = require('../db');


module.exports.index = function(request, response){
    response.render('users/index', {
        users: db.get('users').value()
    });
};

module.exports.search = function(request, response){
    var q = request.query.q;
    var matchedUsers = db.get('users').value().filter(function(user){
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !==-1;
    });
    response.render('users/index', {
        users: matchedUsers
    });
}; 

module.exports.create = function(req, res){
    res.render('users/create');
};

module.exports.get =  function(req, res){
    var id = parseInt(req.params.id);

    var user = db.get('users').find({id : id}).value();

    res.render('users/view', {
        user: user
    });
}

module.exports.postCreate = function(req, res){
    db.get('users').push(req.body).write();
    res.redirect('/users');
}