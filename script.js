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
        return "ERROR";
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
    const perc = "%";
    let stage = 0;
    const negative = "+/-";
    //iterate through button node list to add its content to the display
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if(button.textContent == "%"){
                console.log("perc");
                percentage();
            }else{
            //appends number to display if a operator is not selected
            if(operators.indexOf(button.textContent) < 0 && stage == 0 && !("=" == button.textContent)){ 
                display.textContent += button.textContent;
                //stores operator in variable when button has it and changes the first number to a float
            }else if(operators.indexOf(button.textContent) > -1 && stage == 0){
                operator = button.textContent;
                num1 = parseFloat(display.textContent);
                stage += .5;
                //resets the display and moves on to the 2nd number
            }else if(operators.indexOf(button.textContent) < 0 && stage == .5 && !("=" == button.textContent)){
                display.textContent = "";
                display.textContent += button.textContent;
                stage+= .5;
                //appends the content to the display for the second number
            }else if(operators.indexOf(button.textContent) < 0 && stage == 1 && !("=" == button.textContent)){
                display.textContent += button.textContent;
            //helps chain it if you are doing multiple operations with the calculator
            }else if(operators.indexOf(button.textContent) > -1 && stage == 1){
                num2 = parseFloat(display.textContent);
                const ans = operate(operator, num1, num2);
                update(ans);
                num1 = ans;
                operator = button.textContent;
                stage=.5;
            }else if("=" == button.textContent && stage == 1){
                num2 = parseFloat(display.textContent);
                const ans = operate(operator, num1, num2);
                update(ans);
                num1 = ans;
                stage++;
            }else if(operators.indexOf(button.textContent) > -1 && stage == 2){
                operator = button.textContent;
                stage = .5;
            }
            //clear button resets the calculator
            if(button.textContent == "clear"){
                reset();
                stage = 0;
            }
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
//function to change it number to a percentage
function percentage(stage){
    if(display.textContent != "" && typeof parseFloat(display.textContent) === "number"){ 
    let temp = parseFloat(display.textContent);
    update(temp/=100);
    }
}

//const perc = document.querySelector(".percentage");
//perc.addEventListener('click' , percentage(display.textContent));
populateDisplay();
