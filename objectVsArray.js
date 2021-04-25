//Array - same type data including one box
var ami = [17, 55, 65, 'blue'];



//object - different type including one box | ./[]
//object theke property read krte chai thle . / [""]
// property valu set korte chaile 
//(leftside objectname.propertyname = new vlaue)
//(leftside objectname[propertyname] = new vlaue)
//(leftside propertyname = new vlaue)
//(leftside variable = new vlaue)
var ami2 = {
    age: 17,
    weight:55,
    height: 65,
    color: 'blue'
}
//object property value rules
var myAge = ami2.age; //1
console.log(myAge);

var myAge = ami2['age']; //2
console.log(myAge);

var lookingFor = 'age' ; //3  
var myAge = ami2[lookingFor]; 
console.log(myAge);

ami2.weight = 95;  //4
console.log(ami2);

ami2 ['weight'] = 95;  //5
console.log(ami2);

var lookingFor = 'age' ;
var myAge = ami2[lookingFor];
ami2[lookingFor] = 95;
console.log(ami2);

