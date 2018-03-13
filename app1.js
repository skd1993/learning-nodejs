// file system access
var fs = require('fs');

//synchronous method (blocking)
//complete this code block's exceution before moving on
var res = fs.readFileSync('readme.txt', 'utf8');
console.log(res);

fs.writeFileSync('write.txt', res);

//async versions; doesn't block the extra code after this
fs.readFile('readme.txt', 'utf8', function(err, data){
    console.log(data);
    fs.writeFile('write1.txt', data);
});

console.log('I came first!');

// to delete a file, frst check if it exists!
// fs.unlink('write.txt');

//remove 'Sync' for asynchronous
fs.mkdirSync('dir');
fs.rmdirSync('dir');

fs.mkdir('dir', function(){
    fs.readFile('readme.txt', 'utf8', function(err, data){
        fs.writeFile('./dir/write.txt', data);
    });
});

// cannot remove a dir if it is not empty
// first unlink the files inside then rmdir

// fs.unlink('./dir/write.txt', function(){
//     fs.rmdir('dir');
// });