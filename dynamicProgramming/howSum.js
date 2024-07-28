// write a function that takes in a target sum and an array of numbers as arguments
// return an array containing any combination of elements that adds up to exactly the target sum
// or null if there is none. 
// you need to only return a single combination no matter how many combinations are possible. 


const howSum = (target, numbers, memo={}) => {
  // memoize! 
  if (target in memo) return memo[target];
  // if target is 0, we went down a valid combo chain
  if (target === 0) return [];
  // if its less than 0, we've hit a dead end
  if (target < 0) return null;

  // check each combination for each target
  for (let num of numbers) {
    // if target - num has no remainder (is 0) we know we need to return it as part of a valid combo chain
    memo[target] = howSum(target - num, numbers, memo);
    if (memo[target] !== null) {
      return [...memo[target], num];
    }
  }
  // if we make it all the way through and no combo, return null;
  memo[target] = null;
  return null;
  
}

// brute force
// m = target sum
// n = length of array
// O(n ^ m * m)
// base is the number of choices you have, which is not what i'd expect

const howSumIt = (target, numbers) => {
  const stack = [ target ]
  let combination = []
  while(stack.length > 0) {
    const currTarget = stack.pop();
    if (currTarget === 0) combination = [];
    if (currTarget < 0) combination = null;
    for (let num of numbers) {
      const newTarget = currTarget - num;
      stack.push(newTarget);
    }
  }
}

const numbers = [4, 10, 2, 3];
console.log(howSum(23, numbers));
console.log(howSum(28, [6, 14]));

