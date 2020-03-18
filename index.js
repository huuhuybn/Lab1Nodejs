let express = require('express');
let calculator = require('./calculator');

let bodyparser = require('body-parser');

let app = express();

app.use(bodyparser.urlencoded({extended: true}))

app.get('/', function (request, response) {
    response.sendFile(__dirname + '/index.html');
});

app.get('/home', function (request, response) {
    let a = request.query.a;
    let b = request.query.b;

    let ketqua = calculator.phepCong(parseInt(a), parseInt(b));

    response.send('home : ' + ketqua);
});

app.get('/news', function (request, response) {
    response.send('news');
});

app.post('/login', function (request, response) {

    let username = request.body.a;
    let password = request.body.b;

    response.send('Welcome : ' + username);
});


app.listen(9090, function () {

});



