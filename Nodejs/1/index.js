var expess = require('express');
var app = expess();

var port = 3000;

app.set('view engine', 'pug');
app.set('views', './views')
// app.listen(3000, function(){
//     console.log('Sever listening on port 3000');
// });

app.get('/', function(request, response){
    response.render('index', {
        name: 'Bao'
    });
});


var users = [
    {id : 1, name: 'Bao'},
    {id : 2, name: 'Dung'},
    {id : 3, name: 'Duc'},
    {id : 4, name: 'Huy'},
    {id : 5, name: 'Luong'}
]
app.get('/users', function(request, response){
    response.render('users/index', {
        users: users
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

app.listen(3000, function(){
    console.log('Sever listening on port' + port);
});

//GET POST PUT DELETE PATCH