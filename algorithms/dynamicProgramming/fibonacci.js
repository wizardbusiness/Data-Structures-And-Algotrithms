// Write a function fib(n) that takes in a number as an argumen.
// The function should return the n-th number of the Fib sequence. 
// fib(n) = fib(n - 1) + fib(n - 2)


const fib = (n, cache={}) => {
  if (n in cache) return cache[n]
  if (n === 0 || n === 1) return 1;
  cache[n] = fib(n - 1, cache) + fib(n - 2, cache)
  return cache[n];
}

console.log(fib(4));
console.log(fib(7));
console.log(fib(8));
console.log(fib(50));

