const unsorted = [0, 5, 3, 2, 1, 10, 100, -100, 200, 19, 2, -200];
const unsorted2 = [20];
/**
 * @function quicksort
 * @param {int[]} array
 * @param {int} start
 * @param {int} end
 * @description swaps elements around a pivot value in partitions until the array is sorted
 */

function quicksort(array, start = 0, end = array.length - 1) {
  if (start >= end) return;
  const partitionIndex = merge(array, start, end);

  quicksort(array, start, partitionIndex - 1);
  quicksort(array, partitionIndex + 1, end);
}

/**
 * @function merge
 * @param {int[]} array
 * @param {int} start
 * @param {int} end
 * @returns {int} partition index
 * @description helper function for quicksort that swaps elements around pivot in a partition and finds the next partition
 */

function merge(array, start, end) {
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
quicksort(unsorted);
console.log(unsorted);
