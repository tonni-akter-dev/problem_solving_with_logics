//Check if a large number is divisible by 4 or not
// [A number is divisible by 4 if number formed by last two digits of it is divisible by 4.].
/* const number=123547
const digit=number%100
console.log(digit) */

function divisableBy4(str) {
  const last2Digit = str % 100;
  if (last2Digit % 4 === 0) {
    console.log("yes");
  } else {
    console.log("no");
  }
}
// divisableBy4('123456')

// or

function chechBy4(str) {
  var n = str.length;
  if (n == 0) {
    return false;
  }

  if (n == 1) {
    return str[0] - ("0" % 4) == 0;
  }
  var lastNumber = str[n - 1] - "0";
  var last2ndNumber = str[n - 2] - "0";
  return (last2ndNumber * 10 + lastNumber) % 4 == 0;
}

var str = "12356";
if (chechBy4(str)) {
  console.log("yes");
} else {
  console.log("no");
}
