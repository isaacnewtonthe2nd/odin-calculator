let displayContainer = document.querySelector(".display-container");
displayContainer.style.cssText = `width: ${500 - 40}px; height: ${(560 / 6)}px; padding: 8px; margin-bottom: 10px; background-color: grey; font-size: 70px; text-align: right; color: black;`;
displayContainer.textContent = '0';

let decimalCount = 0;

let strNumeroDos = '';

let numeroUno;
let numeroDos;
let operator;

function operate (operator, num1, num2) {
  if (num2 === 0) {
    return "Lmao";
  } else {
    if (operator === '+') {
      let result = addNumbers(num1, num2);
      return roundNumbers(result);
    } else if (operator === '-') {
      let result = subtractNumbers(num1, num2);
      return roundNumbers(result);
    } else if (operator === '*') {
      let result = multiplyNumbers(num1, num2);
      return roundNumbers(result);
    } else if (operator === '/') {
      let result = divideNumbers(num1, num2);
      return roundNumbers(result);
    } else {
      return num1;
    }
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
    decimalCount = 0;
    return displayContainer.textContent = result;
  }
}

function onlyOneDecimal () {
  if (decimalCount === 0) {
    decimalCount++;
    if (displayContainer.textContent === '0') {
      numberDisplay('0.');
    } else {
      numberDisplay('.');
    } 
  } else {
    return displayContainer.textContent;
  }
}

function checkExpression (sign) {
  if (numeroUno !== undefined && operator !== undefined) {
    equalTo();
    operator = sign;
  } else {
    numeroUno = Number(displayContainer.textContent);
    operator = sign;
    decimalCount = 0;
  }
}

function roundNumbers(result) {
  let strResultArr = result.toString().split('');
  if (strResultArr.length >= 13 ) {
    let roundedResult = strResultArr.slice(0, 12).join('');
    return Number(roundedResult);
  } else {
    return result;
  }
}

function erase () {
  operator = undefined;
  numeroUno = undefined;
  strNumeroDos = '';
  decimalCount = 0;
  return displayContainer.textContent = '0';
}

// console.log(operate(operator, numeroUno, numeroDos));

let body = document.querySelector("body");
body.addEventListener("keydown", (event) => {
  console.log(event.key);
  if (event.key === 'Backspace') {
    erase();
  } else if (event.key === '/') {
    operators('/');
  } else if (event.key === '*') {
    operators('*');
  } else if (event.key === '-') {
    operators('-');
  } else if (event.key === '+') {
    operators('+');
  } else if (event.key === '9') {
    numberDisplay('9');
  } else if (event.key === '8') {
    numberDisplay('8');
  } else if (event.key === '7') {
    numberDisplay('7');
  } else if (event.key === '6') {
    numberDisplay('6');
  } else if (event.key === '5') {
    numberDisplay('5');
  } else if (event.key === '4') {
    numberDisplay('4');
  } else if (event.key === '3') {
    numberDisplay('3');
  } else if (event.key === '2') {
    numberDisplay('2');
  } else if (event.key === '1') {
    numberDisplay('1');
  } else if (event.key === '0') {
    numberDisplay('0');
  } else if (event.key === '.') {
    onlyOneDecimal;
  } else if (event.key === '=') {
    operators('=');
  } else if (event.key === 'Enter') {
    operators('=');
  }
});