const unsorted = [0, 5, 3, 2, 1, 10, -100, 100, 200, 19, 2, 100];
const unsorted2 = [20];

/**
 * @function quicksort
 * @param{number[]} array
 * @param {number} start
 * @param {number} end
 * @description recursively partitions array 
 */

function quicksort(array, start=0, end=array.length - 1) {
  if (start > end) return;

  const pIndex = swap(array, start, end);

  quicksort(array, start, pIndex - 1);
  quicksort(array, pIndex + 1, end);
}
/**
 * @function swap 
 * @param{number[]} array
 * @param {number} start
 * @param {number} end
 * @description swaps elements in partition and returns the partition index
 */

function swap(array, start, end) {
  const pivot = array[end]
  let startIndex = 0;
  for (let i = start; i < array.length; i++) {
    if (array[i] < pivot) {
      [array[i], array[startIndex]] = [array[startIndex], array[i]]
      startIndex++;
    }
  }
  [array[startIndex], array[end]] = [array[end], array[startIndex]];
  return startIndex;
}

quicksort(unsorted)

