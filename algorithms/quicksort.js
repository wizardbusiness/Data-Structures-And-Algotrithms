const unsorted = [0, 5, 3, 2, 1, 10, 100, -100, 200, 19, 2, -200];
const unsorted2 = [20];
/**
 * @function quicksort
 * @param {int[]} array
 * @param {int} start
 * @param {int} end
 */

function quicksort(array, start = 0, end = array.length - 1) {
  if (start > end) return;

  let pivotIndex = swap(array, start, end);

  quicksort(array, start, pivotIndex - 1);
  quicksort(array, pivotIndex + 1, end);
}

/**
 * @function swap
 * @param {int[]} array
 * @param {int} start
 * @param {int} end
 */

function swap(array, start, end) {
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
