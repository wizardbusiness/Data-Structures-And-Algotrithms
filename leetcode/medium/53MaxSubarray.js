const array = [10, -5, 20]
function findMaxSubArray(array) {
  let max = array[0];
  let currMax = array[0]
  for (let i = 1; i < array.length; i++) {
    currMax = Math.max(0, currMax) + array[i];

    if (currMax > max) maxSum = currMax;
  }
  return maxSum;
}

console.log(findMaxSubArray(array));


