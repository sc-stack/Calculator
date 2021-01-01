//basic mathmatic functions
let cur, ans;
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
function populateDisplay(){
    const buttons = document.querySelectorAll("button");
    const display = document.querySelector(".display");
    const operators = "+-/*clear";
    //iterate through button node list to add its content to the display
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if(!(button.textContent.includes(operators)) ){ 
            display.textContent += button.textContent;
            }
        });
    });
}
//updates the display after an operator is pressed on
function update(){
    const buttons = document.querySelectorAll("button");
    const display = document.querySelector(".display");
    display.textContent = ans;
}
populateDisplay();