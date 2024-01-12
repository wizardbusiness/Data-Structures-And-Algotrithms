const unsorted = [0, 5, 3, 2, 1, 10, 100, -100, 200, 19, 2, -200];
const unsorted2 = [20, ]

/**
 * @function quicksort
 * @param {int[]} array - unsorted array
 * @param {int} start - start of partition
 * @param {int} end - end of partition
 */

function quicksort(array, start, end) {
  if (start >= end) return;

  const partitionIndex = lomutoPartition(array, start, end);

  quicksort(array, start, partitionIndex - 1);
  quicksort(array, partitionIndex + 1, end);
}

/**
 * @function lomutoPartition
 * @param {int[]} array - unsorted array
 * @param {int} start - start of partition
 * @param {int} end - end of partition
 */

function lomutoPartition(array, start, end) {
  const pivotValue = array[end];
  let pivotIndex = start;

  for (let i = start; i < end; i++) {
    if (array[i] < pivotValue) {
      [array[i], array[pivotIndex]] = [array[pivotIndex], array[i]];
      pivotIndex++;
    }
  }
  [array[pivotIndex], array[end]] = [array[end], array[pivotIndex]];
  console.log(array);
  return pivotIndex;
}

quicksort(unsorted, 0, unsorted.length - 1);
console.log(unsorted);
