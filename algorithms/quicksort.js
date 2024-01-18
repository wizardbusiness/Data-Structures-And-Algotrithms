const unsorted = [0, 5, 3, 2, 1, 10, 100, -100, 200, 19, 2, -200];
const unsorted2 = [20];

/**
 * @function quicksort
 * @description reverse an unsorted array of integers in place in O(nlogn) time
 * @param {int[]} array
 * @param {int} start partition start
 * @param {int} end partition end
 */

function quicksort(array, start, end) {
  if (start >= end) return;
  const pivotIndex = partition(array, start, end);

  quicksort(array, start, pivotIndex - 1);
  quicksort(array, pivotIndex + 1, end);
}

/**
 * @function partition
 * @description sort elements to left and right of pivot value inside a partition
 * @param {int[]} array
 * @param {int} start
 * @param {int} end
 * @return {int} pivotIndex
 */

function partition(array, start, end) {
  const pivotValue = array[end];
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

quicksort(unsorted, 0, unsorted.length - 1);

console.log(unsorted);
