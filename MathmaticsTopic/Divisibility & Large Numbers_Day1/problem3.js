// Check if a large number is divisible by 6 or not
function checkBy6(str) {
  let n = str.length;

  let lastDigit = str[n - 1] - "0";
  if (lastDigit % 2 == 0) {
    return true;
  }

  let digitSum = 0;
  for (let i = 0; i < n; i++) {
    digitSum += str[i] - "0";
    return digitSum % 3 == 0;
  }
  //   console.log(lastDigit)
}
let str = "1332";
if (checkBy6(str)) console.log("Yes");
else console.log("No");
