var expess = require('express');
var bodyParser = require('body-parser');

var userRoutes = require('./routes/user.route');

var port = 3000;

var app = expess();
app.set('view engine', 'pug');
app.set('views', './views')
// app.listen(3000, function(){
//     console.log('Sever listening on port 3000');
// });

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(expess.static('public'));

app.get('/', function(request, response){
    response.render('index', {
        name: 'Bao'
    });
});

app.use('/users', userRoutes);

app.listen(3000, function(){
    console.log('Sever listening on port' + port);
});

//GET POST PUT DELETE PATCH