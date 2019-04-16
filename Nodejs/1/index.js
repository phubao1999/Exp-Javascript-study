var expess = require('express');
var app = expess();
var bodyParser = require('body-parser');
var low = require('lowdb');
var FileSync = require('lowdb/adapters/FileSync');
var adapter = new FileSync('db.json');

db = low(adapter);

// Set some defaults (required if your JSON file is empty)
db.defaults({ users: [] })
  .write()


var port = 3000;

app.set('view engine', 'pug');
app.set('views', './views')
// app.listen(3000, function(){
//     console.log('Sever listening on port 3000');
// });

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', function(request, response){
    response.render('index', {
        name: 'Bao'
    });
});



app.get('/users', function(request, response){
    response.render('users/index', {
        users: db.get('users').value()
    });
});

app.get('/users/search', function(request, response){
    var q = request.query.q;
    var matchedUsers = users.filter(function(user){
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !==-1;
    });
    response.render('users/index', {
        users: matchedUsers
    });
});

app.get('/users/create', function(req, res){
    res.render('users/create');
});

app.get('/users/:id', function(req, res){
    var id = parseInt(req.params.id);

    var user = db.get('users').find({id : id}).value();

    res.render('users/view', {
        user: user
    });
});

app.post('/users/create', function(req, res){
    db.get('users').push(req.body).write();
    res.redirect('/users');
});

app.listen(3000, function(){
    console.log('Sever listening on port' + port);
});

//GET POST PUT DELETE PATCH