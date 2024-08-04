const reverseString = function (string) {
  stringArray = string.split("");
  stringArrayReversed = stringArray.reverse();
  finalString = "";
  for (item of stringArrayReversed) {
    finalString += item;
  }
  return finalString;
};

// Do not edit below this line
module.exports = reverseString;
