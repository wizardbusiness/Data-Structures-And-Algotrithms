// write a function that takes in a target sum and an array of numbers as arguments
// return an array containing any combination of elements that adds up to exactly the target sum
// or null if there is none. 
// you need to only return a single combination no matter how many combinations are possible. 


const howSum = (target, numbers, memo={}) => {
  if (target in memo) return memo[target];
  if (target === 0) return [];
  if (target < 0) return null;

  for (let num of numbers) {
    const combination =  howSum(target - num, numbers, memo);
    if (combination !== null) {
      return memo[target] = [...combination, num]
    };
  } 
  memo[target] = null
  return memo[target];
}

console.log(howSum(20230, [3, 3, 4, 7]));