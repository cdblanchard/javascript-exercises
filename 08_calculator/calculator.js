const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function (x) {
  if (x.length === 0) {
    return 0;
  } else {
    return x.reduce((a, b) => a + b, 0);
  }
};

const multiply = function (x) {
  return x.reduce((a, b) => a * b);
};

const power = function (x, y) {
  let finalNum = x;
  for (i = 1; i < y; i++) {
    finalNum *= x;
  }
  return finalNum;
};

const factorial = function (x) {
  let result = x;

  if (x === 0 || x === 1) {
    return 1;
  }
  while (x > 1) {
    x--;
    result = result * x;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
