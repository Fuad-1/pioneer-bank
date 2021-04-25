// //repository link: github link
// 
//(function name) kilometerTOMeter - input as usual 
//                 output as return number/string

// var kiloMeter = 2;
// var meter = kiloMeter * 1000;
// console.log("Meter : ", meter);
// console.log(" ");
console.log("kilometerToMeter");

function kilometerToMeter(kiloMeter) {
    var meter = kiloMeter * 1000;
    return meter;
}
var result = kilometerToMeter(157);
console.log(result);

console.log(" ");
//(function name) budgetCalculator - input 3 parameter(amount of watch(50),
//                                         phone(100),
//                                         Laptop(500))
//                    output return plain number                      

// koyta watch ; price =  50 ; total budget cost
//koyta phone ; price = 100;
//koyta laptop ; 
// var watchQuantity = 100;
// var price = 50;
// var total = watchQuantity * price;
// console.log(total);
console.log("budgetCalculator");

function budgetCalculator(watchQuantity, phoneQuantity, laptopQuantity) {
    var watchCost = watchQuantity * 50;
    var phoneCost = phoneQuantity * 100;
    var laptopCost = laptopQuantity * 500;

    var totalCost = watchCost + phoneCost + laptopCost;

    return totalCost;
}
var result = budgetCalculator(8, 5, 10);
console.log(result);

console.log(" ");
//(function name) hotelCost - 1-10 cost = 100
//             11-20 cost = 80
//             20<   cost = 50
//             input - day live? 
//             result -return plain number

//1-10 days = 100 tk 
//11-20 days = 80 tk 
//21 - 30+ days = 50 tk 
//parameter input 1ta living day((30days)  
// 30 days hotel cost = ?

// var livingday = 20;
// var hotelCost = 0;

// if (livingday <= 10) {
//     var hotelCost = livingday * 100;
//     console.log("within 10 days", hotelCost);
// }
// else if (livingday <= 20) {
//     var firstdays = 10 * 100;       //1000
//     var remaining = livingday - 10; //20-10=10
//     var seconddays = remaining * 80; // 10*80 = 800 
//     hotelCost = firstdays + seconddays; //1000+800
//     console.log("within 20 days", hotelCost); 1800

// }
// else {
//     var firstdays = 10 * 100;
//     var seconddays = 10 * 80;
//     var remaining = livingday - 20;
//     var thirddays = remaining * 50;
//     hotelCost = firstdays + seconddays + thirddays;
//     console.log("within 20+ days", hotelCost);
// }
// console.log(hotelCost);
console.log("hotelCost");

function hotelCost(livingday) {
    var hotelCost = 0;

    if (livingday <= 10) {
        var hotelCost = livingday * 100;
    }
    else if (livingday <= 20) {
        var firstdays = 10 * 100;
        var remaining = livingday - 10;
        var seconddays = remaining * 80;
        hotelCost = firstdays + seconddays;

    }
    else {
        var firstdays = 10 * 100;
        var seconddays = 10 * 80;
        var remaining = livingday - 20;
        var thirddays = remaining * 50;
        hotelCost = firstdays + seconddays + thirddays;
    }
    return hotelCost;
}
var result = hotelCost(15);
console.log(result);

console.log(" ");
//(function name) megaFriend -input= names in array(string)
//             output= return big name  

console.log("update")
function megaFriend(friends) {
    var max = friends[0].length;
    var bigName = friends[0];

    for (var i = 0; i < friends.length; i++) {
        var names = friends[i].length;
        if (names > max) {
            bigName = friends[i];
        }
    }
    return bigName;
}
var result = megaFriend(['ali', 'rahman', 'sajjad', 'noman', 'Rafiqul']);
console.log(result);


// special case = error message             

