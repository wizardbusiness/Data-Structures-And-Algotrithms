const unsorted = [0, 5, 3, 2, 1, 10, -100, 100, 200, 19, 2, 100];
const unsorted2 = [20];

/**
 * @function quicksort
 * @param {number[]} array
 * @param {number} start
 * @param {number} end 
 * @description sorts an array in Onlogn time by swapping numbers around a pivot value inside partitions 
 */

function quicksort(array, start=0, end=array.length - 1) {
  if (start > end) return;
  const partitionIndex = swap(array, start, end);
  quicksort(array, start, partitionIndex - 1);
  quicksort(array, partitionIndex + 1, end);
}

/**
 * @function swap
 * @param {number[]} array
 * @param {number} start
 * @param {number} end
 * @description chooses a pivot value, and then swaps elements in place until everything
 * to its left and right is greater than and less than its value 
 */

function swap(array, start, end) {
  const pivotValue = array[end];
  let startIndex = start;
  for (let i = start; i < end; i++) {
    if (array[i] < pivotValue) {
      [array[startIndex], array[i]] = [array[i], array[startIndex]];
      startIndex++;
    }
  }
  [array[startIndex], array[end]] = [array[end], array[startIndex]];
  return startIndex;
};

quicksort(unsorted);
console.log(unsorted)


