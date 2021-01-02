//basic mathmatic functions
let num1, num2, operator;
function add(num1, num2){
    return num1 + num2;
}
function subtract(num1, num2){
    return num1 - num2;
}
function multiply(num1, num2){
    return num1 * num2;
}
function divide(num1, num2){
    if(num2 == 0){
        return "You can't divide by 0";
    }
    return num1 / num2;
}
function operate(operator, num1 , num2){
    //returns a function based on the operator used
    let result; 
    if(operator == "+"){
        result = add(num1, num2);
    }else if(operator == "-"){
        result = subtract(num1, num2);
    }else if(operator == "x"){
        result = multiply(num1, num2);
    }else{
        result = divide(num1, num2);
    }
    return result;
}
//display needs larger font-size
const display = document.querySelector(".display");
function populateDisplay(){
    const buttons = document.querySelectorAll("button");
    const operators = "+-/xclear";
    let stage = 0;
    //iterate through button node list to add its content to the display
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            //appends number to display if a operator is not selected
            if(operators.indexOf(button.textContent) < 0 && stage == 0){ 
                display.textContent += button.textContent;
            }else if(operators.indexOf(button.textContent) > -1 && stage == 0){
                operator = button.textContent;
                num1 = parseFloat(display.textContent);
                stage += .5;
            }else if(operators.indexOf(button.textContent) < 0 && stage == .5 && !("=" == button.textContent)){
                display.textContent = "";
                display.textContent += button.textContent;
                stage+= .5;
            }else if(operators.indexOf(button.textContent) < 0 && stage == 1 && !("=" == button.textContent)){
                display.textContent += button.textContent;
            }else if("=" == button.textContent && stage == 1){
                num2 = parseFloat(display.textContent);
                //updated to show anwser on display
                update(operate(operator, num1, num2));
                operator = button.textContent;
            }
            if(button.textContent == "clear"){
                reset();
                stage = 0;
            }
        });
    });
}
//updates the display after an operator is pressed on
function update(ans){
    display.textContent = ans;
}
//resets everything
function reset(){
    display.textContent = "";
    operator, num1, num2 = undefined;
}
populateDisplay();