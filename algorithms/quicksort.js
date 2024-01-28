const unsorted = [0, 5, 3, 2, 1, 10, 100, -100, 200, 19, 2, -200];
const unsorted2 = [20];
/**
 * @function quicksort
 * @param {int[]} array
 * @param {int} start
 * @param {int} end
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
 */

function partition(array, start, end) {
  const pivotValue = array[end];
  let partitionIndex = start;
  for (let i = start; i < end; i++) {
    if (array[i] < pivotValue) {
      [array[i], array[partitionIndex]] = [array[partitionIndex], array[i]];
      partitionIndex++;
    }
  }

  [array[partitionIndex], array[end]] = [array[end], array[partitionIndex]];
  return partitionIndex;
}
quicksort(unsorted);
console.log(unsorted);
