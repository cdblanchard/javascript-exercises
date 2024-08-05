const sumAll = function (num1, num2) {
  let bigNum;
  let smallNum;
  if (num1 < num2) {
    smallNum = num1;
    bigNum = num2;
  } else {
    smallNum = num2;
    bigNum = num1;
  }
  if (
    !Number.isInteger(smallNum) ||
    !Number.isInteger(bigNum) ||
    smallNum < 0 ||
    bigNum < 0
  ) {
    return "ERROR";
  } else {
    let sum = 0;
    i = smallNum;
    while (i <= bigNum) {
      sum += i;
      i++;
    }
    return sum;
  }
};

// Do not edit below this line
module.exports = sumAll;
