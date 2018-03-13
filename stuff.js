var counter = function(arr){
    return ('there are '+arr.length+' in this array');
};

//console.log(counter(['skd', 'happy', 'hmm']));

var adder = function (a,b){
    return `The sum is ${a+b}` //ECMA!!!!!!!!!!!
};

var pi = 3.142;

//module.exports = counter; //export one function

//export diff values
// module.exports.counter = counter;
// module.exports.adder = adder;
// module.exports.pi = pi;

//orrr
module.exports.hello = function() {
    console.log('hellooooooooooo');
}

//orrrrrrrrrrr
module.exports = {
    counter: counter,
    adder: adder,
    pi: pi
}
