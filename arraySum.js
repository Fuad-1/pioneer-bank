
function arraySum(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        var element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
var numbers = [45, 65, 78, 12, 3, 54, 65]; 
var result = arraySum(numbers);
console.log("total of the numbers: ", result);
console.log("  ");

var total = arraySum([43, 56, 12, 41, 86]);
console.log("total of the numbers: ", total);
console.log("  ");

// var sum = 0;
// for (var i = 0; i < numbers.length; i++) {
//     var element = numbers[i];
//     sum = sum + element;
// }
// console.log("total of the numbers: ", sum);

//Example >>>>
var friends = ["alu", "babu", "kabu", "labu", "chabu"];

var allNames = "" ;
for(var i=0; i < friends.length; i++){
    var name = friends[i];
    allNames = allNames + name ;
}
console.log("total of the numbers: ", allNames);
