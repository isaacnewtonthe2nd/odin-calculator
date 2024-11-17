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

// console.log(operate(operator, numeroUno, numeroDos));