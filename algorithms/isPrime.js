/**
 * @param {int} n
 */
function isPrime(n) {
  // remember to start at 2, 0 and 1 are automatically prime and don't follow the rule!
  for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log(isPrime(12));
