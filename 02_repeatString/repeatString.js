const repeatString = function (str, num) {
  i = 0;
  finalString = "";
  if (num < 0) {
    finalString = "ERROR";
  }
  while (i < num) {
    finalString += str;
    i++;
  }
  return finalString;
};

// Do not edit below this line
module.exports = repeatString;
