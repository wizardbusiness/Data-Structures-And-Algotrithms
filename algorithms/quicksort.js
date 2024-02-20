const unsorted = [0, 5, 3, 2, 1, 10, 100, -100, 200, 19, 2, -200];
const unsorted2 = [20];

/**
 * @function quicksort
 * @param {int[]} array
 * @param {int} start
 * @param {int} end
 * @description Onlogn in place sort
 */

function quicksort(array, start, end) {
  if (!start || !end) {
    console.error("Error: Start or end value not entered!");
    return;
  }
  if (start > end) return;

  const pivotIndex = swap(array, start, end);

  quicksort(array, start, pivotIndex - 1);
  quicksort(array, pivotIndex + 1, end);
}

/**
 * @function swap
 * @param {int[]} array
 * @param {int} start
 * @param {int} end
 * @return {int} pivotIndex
 * @description swaps elements in On time and returns pivot index
 */

function swap(array, start, end) {
  const pivotValue = array[end];
  // increment to correct location
  let pivotIndex = start;

  for (let i = start; i < end; i++) {
    if (array[i] < pivotValue) {
      [array[i], array[pivotIndex]] = [array[pivotIndex], array[i]];
      pivotIndex++;
    }
  }
  [array[pivotIndex], array[end]] = [array[end], array[pivotIndex]];
  return pivotIndex;
}

quicksort(unsorted);
console.log(unsorted);
