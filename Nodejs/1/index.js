var expess = require('express');
var app = expess();

var port = 3000;

// app.listen(3000, function(){
//     console.log('Sever listening on port 3000');
// });

app.get('/', function(request, response){
    response.send('<h1>Hello Word!!!</h1>')
});

app.get('/users', function(request, response){
    response.send('User List')
});

app.listen(3000, function(){
    console.log('Sever listening on port' + port);
});

//GET POST PUT DELETE PATCH