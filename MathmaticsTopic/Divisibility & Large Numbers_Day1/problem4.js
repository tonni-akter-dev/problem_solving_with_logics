// 7
function divisibleBy7(num) {
  if (num < 0) {
    return divisibleBy7(-num);
  }

  if (num == 0 || num == 7) {
    return 1;
  }

  if (num < 10) {
    return 0;
  }
  return divisibleBy7((num / 10) * (num - (num / 10) * 10));
}
let num = 616;
if (divisibleBy7(num) >= 0) {
  console.log("Divisible");
} else {
  console.log("not divisible");
}
