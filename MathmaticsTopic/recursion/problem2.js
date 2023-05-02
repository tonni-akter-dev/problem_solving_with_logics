//2. Write a JavaScript program to compute the sum of an array of integers.
function sumOfArray(my_arr) {
  if (my_arr.length === 1) {
    return my_arr[0];
  } else {
    return my_arr.pop() + sumOfArray(my_arr);
  }
}
console.log(sumOfArray([1, 2, 3, 4, 5]));
