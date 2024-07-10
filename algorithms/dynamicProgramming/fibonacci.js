// Write a function fib(n) that takes in a number as an argumen.
// The function should return the n-th number of the Fib sequence. 
// fib(n) = fib(n - 1) + fib(n - 2)


const fib = (n, memo={}) => {
  if (n in memo) return memo[n];
  if (n === 0 || n === 1) return 1;
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}

console.log(fib(4));
console.log(fib(7));
console.log(fib(8));
console.log(fib(50));

