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

function quicksort(array, start=0, end=array.length - 1) {
  if (start > end) return;

  const partitionIndex = partition(array, start, end);

  quicksort(array, start, partitionIndex - 1);
  quicksort(array, partitionIndex + 1, end);
}

function partition(array, start, end) {
  const pivotIndex = Math.floor((start + end) / 2)
  const pivot = array[pivotIndex];


  [array[pivotIndex], array[end]] = [array[end], array[pivotIndex]];
  let partitionIndex = start;

  for(let i = start; i < end; i++) {
    if (array[i] < pivot) {
      [array[i], array[partitionIndex]] = [array[partitionIndex], array[i]];
      partitionIndex++;
    }
  }

  [array[partitionIndex], array[end]] = [array[end], array[partitionIndex]];
  return partitionIndex;
}

quicksort(unsorted);
console.log(unsorted);