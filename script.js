let displayContainer = document.querySelector(".display-container");
displayContainer.style.cssText = `width: ${500 - 40}px; height: ${(560 / 6)}px; padding: 8px; margin-bottom: 10px; background-color: grey; font-size: 70px; text-align: right; color: black;`;
displayContainer.value = '0';

let strNumeroUno = '';
let strNumeroDos = '';

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
    } else if (!operator === true) {
      return displayContainer.value += strNum;
    } else if (!operator === false) {
      strNumeroDos += strNum;
      return displayContainer.value = strNumeroDos;
      // return displayContainer.value += secondNumber;
    }
  } else {
    return displayContainer.value;
  }
}

function operators (sign) {
  if (sign === '+') {
    checkExpression(sign);
  } else if (sign === '-') {
    checkExpression(sign);
  } else if (sign === '*') {
    checkExpression(sign);
  } else if (sign === '/') {
    checkExpression(sign);
  } else if (sign === '=') {
    equalTo();
  }
}

function equalTo () {
  if (!numeroUno === true || (numeroUno !== undefined && operator === undefined)) {
    return displayContainer.value;
  } else {
    numeroDos = Number(displayContainer.value);
    let result = operate(operator, numeroUno, numeroDos);
    numeroUno = result;
    operator = undefined;
    strNumeroDos = '';
    return displayContainer.value = result;
  }
}

function checkExpression (sign) {
  if (numeroUno !== undefined && operator !== undefined) {
    equalTo();
    operator = sign;
  } else {
    numeroUno = Number(displayContainer.value);
    operator = sign;
  }
}

function erase () {
  operator = undefined;
  numeroUno = undefined;
  strNumeroDos = '';
  return displayContainer.value = '0';
}

// console.log(operate(operator, numeroUno, numeroDos));