$(document).ready(initializeApp);
var calculationArray = [];
var displayArray = [];
var stringNumberToPush = "";
var calculationResult = null;
function initializeApp(){
  applyClickHandlers();
}
function applyClickHandlers(){
  $('#number-block').on('click','.number',numberButtonHandler);
  $('#operator-column').on('click','.operator',operatorButtonHandler);
  $('#equals').on('click',equalsButtonHandler);
}
function numberButtonHandler(event){
  var inputtedNumber = "";
  inputtedNumber = event.currentTarget;
  var inputtedNumberValue = $(inputtedNumber).find("p").text();
  stringNumberToPush += inputtedNumberValue;
  displayArray.push(inputtedNumberValue);
  updateDisplay();
}
function operatorButtonHandler(event){
  var inputtedOperator = "";
  inputtedOperator = event.currentTarget;
  var inputtedOperatorValue = $(inputtedOperator).find('p').text();
  displayArray.push(inputtedOperatorValue);
  updateDisplay();
  calculationArray.push(stringNumberToPush);
  calculationArray.push(inputtedOperatorValue);
  stringNumberToPush="";
}
function equalsButtonHandler(event){
  calculationArray.push(stringNumberToPush);
  stringNumberToPush ="";
  displayArray = [];
  var answer = calculate(calculationArray[0],calculationArray[2],calculationArray[1]);
  displayArray.push(answer);
  updateDisplay();
}
function updateDisplay(){
  var displayText = displayArray.join("");
  $('#display-text').text(displayText);
}
function calculate(num1,num2,operator){
  var number1 = parseFloat(num1);
  var number2 = parseFloat(num2);
  var result = null;
  switch(operator){
    case '+':
      result = number1 + number2;
    break;
    case '-':
      result = number1 - number2;
    break;
    case '*':
      result = number1 * number2;
    break;
    case '/':
      result = number1 / number2;
    break;
  }
  return result;
}
