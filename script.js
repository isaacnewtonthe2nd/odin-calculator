let displayContainer = document.querySelector(".display-container");
displayContainer.style.cssText = `width: ${500 - 40}px; height: ${(560 / 6)}px; padding: 8px; margin-bottom: 10px; background-color: grey; font-size: 70px; text-align: right; color: black;`;
displayContainer.value = '0';

let numeroUno;
let numeroDos;
let operator;

function operate (operator, num1, num2) {
  if (operator === '+') {
    return addNumbers(num1, num2);
  } else if (operator === '-') {
    return subtractNumbers(num1, num2);
  } else if (operator === '*') {
    return multiplyNumbers(num1, num2);
  } else if (operator === '/') {
    return divideNumbers(num1, num2);
  } else {
    return num1;
  }
}

function addNumbers(...nums) {
  return nums.reduce((total, current) => { return total += current}, 0);
}

function subtractNumbers(...nums) {
  return nums.reduce((total, current) => {return total -= current});
}

function multiplyNumbers(...nums) {
  return nums.reduce((total, current) => {return total *= current});
}

function divideNumbers(...nums) {
  return nums.reduce((total, current) => {return total /= current});
}

function numberDisplay(strNum) {
  if (Number(displayContainer.value) <= 10e9) {
    if (displayContainer.value === '0') {
      return displayContainer.value = strNum;
    } else {
      return displayContainer.value += strNum;
    }
  } else {
    return displayContainer.value;
  }
}

// console.log(operate(operator, numeroUno, numeroDos));