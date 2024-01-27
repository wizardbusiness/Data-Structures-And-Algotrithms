const unsorted = [0, 5, 3, 2, 1, 10, 100, -100, 200, 19, 2, -200];
const unsorted2 = [20];
/**
 * @function quicksort
 * @param {int[]} array
 * @param {int} start - partition start
 * @param {int} end - partition end
 * @description sorts an unsorted array of ints in place
 *
 */

function quicksort(array, start = 0, end = array.length - 1) {
  if (start >= end) return;

  const partitionIndex = partition(array, start, end);

  quicksort(array, start, partitionIndex - 1);
  quicksort(array, partitionIndex + 1, end);
}

/**
 * @function partition
 * @param {int[]} array
 * @param {int} start
 * @param {int} end
 * @returns {int} pivot index
 * @description partitions elements in an array of ints around a pivot and returns the pivot index
 */

function partition(array, start, end) {
  // pivotValue
  const pivotValue = array[end];
  // pivot index
  let pivotIndex = start;

  for (let i = start; i < end; i++) {
    if (array[i] < pivotValue) {
      // swap elements at i and pivot index
      [array[i], array[pivotIndex]] = [array[pivotIndex], array[i]];
      // increment pivot index
      pivotIndex++;
    }
  }
  [array[pivotIndex], array[end]] = [array[end], array[pivotIndex]];
  return pivotIndex;
}

quicksort(unsorted);
console.log(unsorted);
