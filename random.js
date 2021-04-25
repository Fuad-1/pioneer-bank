//int, float/(floor & ceil)
var num = 2.12458;
var result = Math.floor(num);
console.log(result);

var result = Math.ceil(num);
console.log(result);

var result = Math.round(num);
console.log(result);

var dice = Math.random() * 6;
console.log(dice);

var randomNumber = Math.random() * 6;
var output = Math.round(randomNumber);
console.log(output);
console.log("  ");

for(var i = 0; i<10; i++){
    var randomNumber = Math.random() * 200;
    var output = Math.round(randomNumber);
    console.log(output);
    
}


