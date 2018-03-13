// express basics
var express = require('express');
var bp = require('body-parser');

// body-parser acts as a middleware that works upon the request to be POSTed

// fire the function on this var
var app = express();

// pass POST data and store in var
var urlencodedParser = bp.urlencoded({ extended: false });

app.set('view engine', 'ejs'); // looks templates in /view

// use middleware
// when u open /assets the url shows as / coz the middleware exists till /asssets.. anything else is taken after that
// app.use('/assets', function(req, res, next){
//     console.log(req.url);
//     next();
// });

// now any request made to /assets will be routed properly due to this middleware
// so it will be able to serve styles.css now
app.use('/assets', express.static('assets'));

app.get('/', function(req, res){
    // res.send('string comes...');    
    // no need to specify the content type
    // res.sendFile(__dirname + '/index.html');
    res.render('index');
});

app.get('/contact', function(req, res){
    // code bw req and res is middleware
    res.render('contact', {qs: req.query});
});

app.post('/contact', urlencodedParser, function(req, res){
    // access POSTed data in req.body
    console.log(req.body);
    res.render('contact-success', {data: req.body});
});

// route parameters :id
app.get('/profile/:name', function(req, res){
    // res.send('you req to see the id: ' + req.params.name);
    var data  = {
        age: 23,
        job: 'ninja',
        hobbies: ['games', 'tv', 'sketch']
    };
    res.render('profile', {person: req.params.name, data: data});
});

// express 'app' running on port 3000
app.listen(3000);

// CRUD operations can be used GET, POST, DELETE, PUT 
// GET - app.get('route', fn)
// POST - app.post('route', fn)
// DELETE - app.delete('route', fn)