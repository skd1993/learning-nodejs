//clients and servers
var http = require('http');
var fs = require('fs'); // to read the stream

// __dirname is global var
// buffer fills and passes data in chunks in rs
// createReadStream inherits event emitter
var rs = fs.createReadStream(__dirname + '/junk.txt', 'utf8');

// write stream
var ws = fs.createWriteStream(__dirname + '/written.txt');
var pipe_ws = fs.createWriteStream(__dirname + '/pipeWritten.txt');

rs.on('data', function(chunk){
    console.log('received');
    // console.log(chunk); 
    ws.write(chunk);
});

// pipes
// abstracts all the things we do in the above code block
// listens to event, buffer full, then write to ws
rs.pipe(pipe_ws);


var server = http.createServer(function(req, res){
    console.log('req was made', req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hey Ninjas'); //end the res and send
});


//set a port to listen to for reqs
server.listen(3000, '127.0.0.1');
console.log('yo mans');
