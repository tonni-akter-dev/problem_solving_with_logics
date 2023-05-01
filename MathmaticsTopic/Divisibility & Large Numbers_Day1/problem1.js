/* Check if a large number is divisible by 3 or not
Check divisibility by 7
Check if a large number is divisible by 9 or not
Check if a large number is divisible by 11 or not
Divisibility by 12 for a large number
Check if a large number is divisible by 13 or not
Check if a large number is divisibility by 15
Number is divisible by 29 or not */

function check(str) {
  let n = str.length;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += str[i] - "0";
    return sum % 3 == 0;
    // console.log(sum)
  }
}
let str = "12345";
const check1 = check(str) ? "yes" : "no";
console.log(check1)
