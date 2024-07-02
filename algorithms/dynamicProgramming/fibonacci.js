// Write a function fib(n) that takes in a number as an argumen.
// The function should return the n-th number of the Fib sequence. 

const fib = (n, memo={}) => {
  console.log(memo)
  if (n <= 2) return 1;
  if (n in memo) return memo[n];
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return fib(n - 1, memo) + fib(n - 2, memo)
}

console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(50));

