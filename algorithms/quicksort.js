const unsorted = [0, 5, 3, 2, 1, 10, 100, -100, 200, 19, 2, -200];
const unsorted2 = [20];

/**
 * @function quicksort - sorts an array of ints in O(nlogn) time, using pivot element and divide and conquer
 * @param {int[]} array -unsorted array of ints
 * @param {int} start - start index
 * @param {int} end - end index
 */

function quicksort(array, start, end) {
  if (start >= end) return;

  const partitionIndex = partition(array, start, end);

  quicksort(array, start, partitionIndex - 1);
  quicksort(array, partitionIndex + 1, end);
}

/**
 * @function partition - partitions an array in O(n)
 * @param {int[]} array - array to be partitioned
 * @param {int} start - partition beginning
 * @param {int} end - partition end
 *
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

quicksort(unsorted, 0, unsorted.length - 1);

console.log(unsorted);
