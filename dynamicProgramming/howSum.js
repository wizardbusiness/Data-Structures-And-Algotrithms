// write a function that takes in a target sum and an array of numbers as arguments
// return an array containing any combination of elements that adds up to exactly the target sum
// or null if there is none. 
// you need to only return a single combination no matter how many combinations are possible. 


const howSum = (target, numbers, memo={}) => {
  if (target in memo) return memo[target];
  if (target === 0) return [];
  if (target < 0) return null;
  for (let num of numbers) {
    memo[target] = howSum(target - num, numbers, memo);
    if (memo[target] !== null) return [...memo[target], num];
  }
  memo[target] = null;
  return null;
}

// brute force
// m = target sum
// n = length of array
// O(n ^ m * m)
// base is the number of choices you have, which is not what i'd expect

const howSumIt = (target, numbers) => {

}

const numbers = [4, 10, 2, 3];
console.log(howSum(23, numbers));
console.log(howSum(28, [6, 14]));

