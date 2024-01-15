const unsorted = [0, 5, 3, 2, 1, 10, 100, -100, 200, 19, 2, -200];
const unsorted2 = [20];

/**
 * @function quicksort sorts an unsorted array of ints using partitioning and divide and conquer
 * @param {int[]} array of integers
 * @param {int} start partition start
 * @param {int} end partition end
 */

function quicksort(array, start = 0, end = array.length - 1) {
  if (start >= end) return;

  const partitionIndex = partition(array, start, end);

  quicksort(array, start, partitionIndex - 1);
  quicksort(array, partitionIndex + 1, end);
}

/**
 * @function partition partitions an unsorted array around a pivot
 * @param {int[]} array unsorted arrray
 * @param {int} start partition start
 * @param {int} end partition end
 */

function partition(array, start, end) {
  const pivot = array[end];
  let pivotIndex = start;
  for (let i = start; i < end; i++) {
    if (array[i] < pivot) {
      [array[i], array[pivotIndex]] = [array[pivotIndex], array[i]];
      pivotIndex++;
    }
  }
  [array[pivotIndex], array[end]] = [array[end], array[pivotIndex]];

  return pivotIndex;
}

quicksort(unsorted);

console.log(unsorted);
