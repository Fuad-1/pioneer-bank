var name = [3, 6, 2, 7, 3, 2, 8, 1, 9, 11, 56];

var uniqueName = [];
for(var i=0; i < name.length; i++){
    var element = name[i];
    var index = uniqueName.indexOf(element); //indexof value either 0 or 1 || no value -1 
    if(index == -1){
        uniqueName.push(element);
    } 
}
console.log(uniqueName);


function add(a, b){
    return a + b;
}
console.log(add("adam" + "eve"))

