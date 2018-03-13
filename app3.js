var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    console.log('req was made:' + req.url);
    res.writeHead(200, {'Content-Type': 'application/json'});
    // var rs = fs.createReadStream(__dirname + '/index.html', 'utf8');
    // res object is a writable stream, writing to it will close the pipe as well
    var myObj = {
        name: 'skd',
        job: 'engg',
        age: 24
    };
    // rs.pipe(res);
    // res.end expects a string or a buffer
    res.end(JSON.stringify(myObj));
});

server.listen(3000, '127.0.0.1');
console.log('helooooooooooo');