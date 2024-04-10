// https://stackabuse.com/quicksort-in-javascript/
const unsorted = [0, 5, 3, 2, 1, 10, -100, 100, 200, 19, 2, 100];
const unsorted2 = [20];

/**
 * @function quicksort
 * @param {number[]} array
 * @param {number} start
 * @param {number} end
 * @description sorts integers in an unsorted array in nlogn time and n space
 */

function quicksort(array, start = 0, end = array.length - 1) {
  if (start > end) return;

  const partitionIndex = swap(array, start, end);

  quicksort(array, start, partitionIndex - 1);
  quicksort(array, partitionIndex + 1, end);
}

function swap(array, start, end){
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

quicksort(unsorted)

console.log(unsorted)