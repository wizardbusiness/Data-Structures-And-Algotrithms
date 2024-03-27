const unsorted = [0, 5, 3, 2, 1, 10, 100, -100, 200, 19, 2, -200];
const unsorted2 = [20];

/**
 * @function quicksort
 * @param {int[]} array
 * @param {int} start
 * @param {int} end
 * @description Onlogn in place sort
 */

function quicksort(array, start = 0, end = array.length - 1) {
  if (!array.length) {
    console.error("invalid data structure");
  }
  if (start > end) return;

  const partition = swap(array, start, end);
  quicksort(array, start, partition - 1);
  quicksort(array, partition + 1, end);
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
  let partitionIndex = start;
  for (let i = start; i < end; i++) {
    if (array[i] < pivotValue) {
      [array[i], array[partitionIndex]] = [array[partitionIndex], array[i]];
      partitionIndex++;
    }
  }

  [array[partitionIndex], array[end]] = [array[end], array[partitionIndex]]
  return partitionIndex;
}

quicksort(unsorted);
console.log(unsorted);
