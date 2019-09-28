$(document).ready(initializeApp);
var calculationArray = [];
var displayArray = [];
var stringNumberToPush = "";
var inputtedDecimalValue = "";
var calculationResult = null;
function initializeApp(){
  applyClickHandlers();
}
function applyClickHandlers(){
  $('#number-block').on('click','.number',numberButtonHandler);
  $('#operator-column').on('click','.operator',operatorButtonHandler);
  $('#equals').on('click',equalsButtonHandler);
  $('#decimal').on('click', decimalsButtonHandler);
}
function numberButtonHandler(event){
  var inputtedNumber = "";
  inputtedNumber = event.currentTarget;
  var inputtedNumberValue = $(inputtedNumber).find("p").text();
  stringNumberToPush = stringNumberToPush + inputtedDecimalValue + inputtedNumberValue;
  inputtedDecimalValue = "";
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

  var answer = calculate(calculationArray[0], calculationArray[2], calculationArray[1], calculationArray[3], calculationArray[4]);
  displayArray.push(answer);
  updateDisplay();
}
function decimalsButtonHandler(event){
  var inputtedDecimal = "";
  inputtedDecimal = event.currentTarget;
  inputtedDecimalValue = $(inputtedDecimal).find('p').text();
  displayArray.push(inputtedDecimalValue);
  updateDisplay();
}
function updateDisplay(){
  var displayText = displayArray.join("");
  $('#display-text').text(displayText);
}
function calculate(num1, num2, operator, operator2, num3){
  var number1 = parseFloat(num1);
  var number2 = parseFloat(num2);
  var number3 = parseFloat(num3);
  if (operator === '+'){
    calculationResult = number1 + number2;
  } else if (operator === '-') {
    calculationResult = number1 - number2;
  } else if (operator === '*') {
    calculationResult = number1 * number2;
  } else if (operator === '/') {
    calculationResult = number1 / number2;
  }
  if (operator2 === '+') {
    calculationResult += number3;
  } else if (operator2 === '-') {
    calculationResult -= number3;
  } else if (operator2 === '*') {
    calculationResult *= number3;
  } else if (operator2 === '/') {
    calculationResult /= number3;
  }
  return calculationResult;
}
