//0, 1, 1, 2, 3, 5, 8, 13, 21, 34
function fibonacci(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// console.log(fibonacci(8))
/* function fibonacciSequence(length) {
    var sequence = [];
    for (var i = 0; i < length; i++) {
      sequence.push(fibonacci(i));
    }
    return sequence;
  }
  console.log(fibonacciSequence(5)) */