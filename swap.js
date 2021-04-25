var a = 5;
var b = 7;
//console.log("Before swap: a=", a, "b=", b);
var temp = a;
a = b;
b = temp;
//console.log("After swap: a=", a, "b=", b);

var x = 5;
var y = 7;
console.log("Before swap: x=", x, "y=", y);
x = x + y;
y = x - y; 
x = x - y;
console.log("After swap: x=", x, "y=", y);
console.log("  ");



// Java Script Way Destucting-(Programming Lang. specefic) >>
var p = 5;
var q = 7;
console.log("Before swap: p=", p, "q=", q);

[p, q] = [q, p]
console.log("After swap: p=", p, "q=", q);

var first = "Rafsan" ;
var second = "Samira" ;
var temp = first;
console.log("Before swap: first=", first, "second=", second);
first = second;
second = temp;
console.log("After swap: first=", first, "second=", second);

