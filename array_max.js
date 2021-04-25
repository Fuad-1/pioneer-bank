var marks = [45, 81, 63, 98, 56, 35, 23];

var max = marks[0];
for(var i=0; i<marks.length; i++){
    var element = marks[i];
    if(element > max){
        max = element;
    }
    console.log(max);
}
console.log("Highest score is: ",max);
console.log(" ");


var marks = [45, 81, 63, 98, 56, 35, 23];

var min = marks[0];
for(var i=0; i < marks.length; i++){
    var element = marks[i];
    if(element < min){
        min = element;
    }
    console.log(element);
}
console.log("Smallest number =",min);


