/* const digits = [11, 2, 5];
for (let i = 0; i <= digits.length; i++) {
  if (digits[i] == digits.slice(-1)) {
    console.log(digits[i] += 1);
  } 
}

 */

/* var plusOne = function (digits) {
  for (let i = 0; i <= digits.length; i++) {
    if (digits[i] == digits.slice(-1)) {
     return (digits[i] += 1);
    }
  }
};

const result=plusOne([1,2,3])
console.log(result) */

var plusOne = function (digits) {
    let str = digits.join("")
    let num = BigInt(str) + BigInt(1)
    return num.toString().split('').map(num=>parseInt(num))
  };
  
  