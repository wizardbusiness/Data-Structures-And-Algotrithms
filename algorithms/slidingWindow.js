const array = [1, 2, 4, 5, 6, 7, 9];
// Indentifying slidingWindow. 
// Usually involves solving a max or min subarray or substring. 
// can be easily solved in On^2 using nested loops - using sliding window is O(n) or 0(nLogn)
// N <= 10^6

function fixedSlidingWindow(array, windowWidth) {
  const sums = [];
  for (let i = 0; i + windowWidth < array.length; i++) {
    const sum = array.slice(i, i + windowWidth)
    // .reduce((total, el) => total += el);
    sums.push(sum)
  }
  return sums;
}

console.log(fixedSlidingWindow(array, 3));