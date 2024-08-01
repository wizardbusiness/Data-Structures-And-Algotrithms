// Write a function bestSum that takes in a target sum and an array of numbers as arguments

// return an array containgin the shortest combination of numbers that add up to exactly the target sum

// if theres a tie return any shortest combination

const bestSum = (target, numbers, shortestCombination = []) => {
  if (target === 0) return [];
  if (target < 0) return null;
  for (let num of numbers) {
    const combination = bestSum(target - num, numbers, shortestCombination);
    if (combination !== null) {
      if (shortestCombination.length === 0) {
        shortestCombination = [...combination, num]
      }
      else if (combination.length < shortestCombination.length) {
        shortestCombination = [...combination, num];
      };
    };
    console.log(shortestCombination)
  }
    

  return shortestCombination;
}

const numbers = [8, 4, 3, 7];

console.log(bestSum(7, numbers))

