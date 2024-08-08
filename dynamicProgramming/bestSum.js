// Write a function bestSum that takes in a target sum and an array of numbers as arguments

// return an array containgin the shortest combination of numbers that add up to exactly the target sum

// if theres a tie return any shortest combination

const bestSum = (target, numbers, memo={}) => {
  if (target in memo) return memo[target]
  if (target === 0) return [];
  if (target < 0) return null;
  let shortestCombination = null
  for (let num of numbers) {
    combination = bestSum(target - num, numbers, memo);
    if (combination !== null) {
      if (shortestCombination === null || combination.length < shortestCombination.length) {
        shortestCombination = [...combination, num]
      }
    };
  }
  memo[target] = shortestCombination;
  return shortestCombination;
}

// brute force 
// time O(n^m)
// space O(m^2)

// memoized
// time O(n * m^2)
// space O(m^2)

const numbers = [2, 3, 5];

console.log(bestSum(30, numbers))
console.log(bestSum(100, [1, 2, 5, 25]))

