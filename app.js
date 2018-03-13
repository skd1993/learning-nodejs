// var time = 0;

// var timer = setInterval(function(){
//     time+=2;
//     console.log(time);
//     if(time > 5){
//         clearInterval(timer);
//     }
// }, 2000);

// console.log(__dirname); //dir name
// console.log(__filename); //file name

// function callFunction(fun){
//     fun();
// }

// var h = function(){ //function expression
//     console.log('bye');
// };
// h(); //call it
// callFunction(h); //call via parameter

//var counter = require('./counter');
// var stuff = require('./stuff');

// console.log(stuff.counter(['skd', 'happy', 'hmm']));
// console.log(stuff.adder(3,5));
// console.log(stuff.pi);
// console.log(stuff.adder(stuff.pi, 6));
//stuff.hello();

var events = require('events');

// var myEmitter = new events.EventEmitter();

// myEmitter.on('someEvent', function(msg){
//     console.log(msg);
// });

// myEmitter.emit('someEvent', 'yeah man');

var util = require('util'); //inherit certain thing built into node js

//object!
var Person = function(name) {
    this.name = name;
};

// inherit the event emitter by Person constructor
util.inherits(Person, events.EventEmitter);

//init 3 objects
var james = new Person('james');
var skd = new Person('skd');
var cat = new Person('cat');

var people = [james, skd, cat];

//now we can add custom events
people.forEach(function(person){
    person.on('speak', function(msg){
        console.log(person.name + ' said: '+ msg);
    }); //attaching custom event to each one
});

james.emit('speak', 'hey man! wassa')