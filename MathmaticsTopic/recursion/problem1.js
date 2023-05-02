/* function log(num) {
  if (num > 5) {
    return;
  }
  console.log(num);
  log(num + 1);
}
log(1); */

//Recursively random a number until it returns 5
/* function randomUntil5(result = 0, count = 0) {
  if (result == 5) {
    console.log(`the result is ${result}`);
    console.log(`Total count ${count}`);
    return;
  }
  result = Math.floor(Math.random() * (10));
  count++;
  randomUntil5(result, count);
}
randomUntil5();
 */
/* 
let result = 0;
let count = 0;

while (result !== 5) {
  result = Math.floor(Math.random() * (10 - 1 + 1) + 1);
  count++;
}

console.log(`The random result: ${result}`);
console.log(`How many times random is executed: ${count}`); */


