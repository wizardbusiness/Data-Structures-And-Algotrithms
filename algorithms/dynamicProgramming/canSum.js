// check if some combination of positive numbers in an array add up to a target value
// you can use any number any number of times

const canSum = (target, array, memo={}) => {
  if (target in memo) return memo[target];
  if (target === 0) return true;
  if (target < 0) return false;

  for (let num of array) {
    let remainder = target - num;
    if (canSum(remainder, array, memo) === true) {
      memo[target] = true;
      return true;
    };
  }
  memo[target] = false;
  return false;
}
// m = height of tree / target value
// n = breadth of tree / array length
// unoptimized time complexity O(n ^ m)
// unoptimized space complexity O(m)
// optimized time complexity O(m * n)
// optimized space complexity O(m)
// for space, look at the max space the array can take up
// each layer of tree is a frame on the call stack
// for time look at the max height of the call stack (m) to the the max length of the array (n)
// since each 


console.log(canSum(300, [7, 14]));

