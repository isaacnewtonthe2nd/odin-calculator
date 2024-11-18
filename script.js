let displayContainer = document.querySelector(".display-container");
displayContainer.style.cssText = `width: ${500 - 40}px; height: ${(560 / 6)}px; padding: 8px; margin-bottom: 10px; background-color: grey; font-size: 70px; text-align: right; color: black;`;
displayContainer.textContent = '0';

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
  if (Number(displayContainer.textContent) <= 10e10) {
    if (displayContainer.textContent === '0') {
      return displayContainer.textContent = strNum;
    } else if (!operator === true) {
      return displayContainer.textContent += strNum;
    } else if (!operator === false) {
      strNumeroDos += strNum;
      return displayContainer.textContent = strNumeroDos;
      // return displayContainer.value += secondNumber;
    }
  } else {
    return displayContainer.textContent;
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
    return displayContainer.textContent;
  } else {
    numeroDos = Number(displayContainer.textContent);
    let result = operate(operator, numeroUno, numeroDos);
    numeroUno = result;
    operator = undefined;
    strNumeroDos = '';
    return displayContainer.textContent = result;
  }
}

function checkExpression (sign) {
  if (numeroUno !== undefined && operator !== undefined) {
    equalTo();
    operator = sign;
  } else {
    numeroUno = Number(displayContainer.textContent);
    operator = sign;
  }
}

function erase () {
  operator = undefined;
  numeroUno = undefined;
  strNumeroDos = '';
  return displayContainer.textContent = '0';
}

// console.log(operate(operator, numeroUno, numeroDos));