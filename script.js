//basic mathmatic functions
function add(num1, num2){
    return num1 + num2;
}
function subtract(num1, num2){
    return num1 - num2;
}
function multiply(num1 ,num2){
    return num1 * num2;
}
function divide(num1, num2){
    return num1 / num2 ;
}
function operate(operator, num1 , num2){
    //returns a function based on the operator used
    let result; 
    if(operator == "+"){
        result = add(num1, num2);
    }else if(operator = "-"){
        result = subtract(num1, num2);
    }else if(operator = "*"){
        result = multiply(num1, num2);
    }else{
        result = divide(num1, num2);
    }
    return result;
}
