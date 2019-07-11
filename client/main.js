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
  console.log(calculationArray);
}
function equalsButtonHandler(event){
  console.log('event object: ', event);
  calculationArray.push(stringNumberToPush);
  stringNumberToPush ="";
  displayArray = [];
  console.log(calculationArray);
}
function updateDisplay(){
  var displayText = displayArray.join("");
  $('#display-text').text(displayText);
}
