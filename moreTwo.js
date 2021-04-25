//function - code organized, call 

//sum 3 value but take 3 differen parameter 
function add(firstNum, secondNum, thirdNum){
    var sum = firstNum + secondNum + thirdNum;
    return sum;
}

//
function add2(numbers){
    var sum = numbers[0] + numbers[1] + numbers[3];
}

//give array and dynamically choose how many numbers do you sum 
function add3(numbers){
    var sum = 0;
    for(var i=0; i < numbers.length; i++){
        if(numbers[i]>0){
            sum = sum + numbers[i];
        }
        
    }
    return sum;
}