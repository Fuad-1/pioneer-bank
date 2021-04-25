// var speech = "I am a   good person. I don't snore at night";
// console.log(speech.length);

// var count = 0;
// for(var i=0; i<speech.length; i++){
//     var char = speech[i] ;
//     if(char == " " && speech[i-1] != " "){
//         count++ ;
//     }
    
// }
// count++ ;
// console.log(count);


var speech =  "I am hardworking. I am serious. I am sure I will do it";
console.log(speech.length);

var count = 0;
for(var i=0; i<speech.length; i++){
    var char = speech[i] ;
    if(char == 'a' && speech[i-1] != 'a'){
        count++ ;
    }
    
}
count++ ;
console.log(count);
