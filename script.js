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