const unsorted = [0, 5, 3, 2, 1, 10, 100, -100, 200, 19, 2, -200];
const unsorted2 = [20];

/**
 * @function quicksort
 * @description Sorts an unsorted array of integers from smallest to greatest in O(nlogn) time complexity
 * using pivot and divide and conquer partitioning.
 * @param {int[]} array - unsorted array
 * @param {int} start - partition start
 * @param {int} end - partition end
 */

function quicksort(array, start, end) {
  // base case
  if (start >= end) return;
  const partitionIndex = partition(array, start, end);
  quicksort(array, start, partitionIndex - 1);
  quicksort(array, partitionIndex + 1, end);
}

/**
 * @function partition
 * @description partitions the array being sorted into integers less and greater than pivot value
 * @param {int[]} array - array being partitioned
 * @param {int} start - partition start
 * @param {int} end - partition end
 * @returns {int} returns partition index
 */

function partition(array, start, end) {
  const pivot = array[end];
  let partitionIndex = start;

  console.log(partitionIndex);

  for (let i = start; i < end; i++) {
    if (array[i] < pivot) {
      [array[i], array[partitionIndex]] = [array[partitionIndex], array[i]];
      partitionIndex++;
    }
  }

  [array[partitionIndex], array[end]] = [array[end], array[partitionIndex]];

  return partitionIndex;
}

quicksort(unsorted, 0, unsorted.length - 1);

console.log(unsorted);
