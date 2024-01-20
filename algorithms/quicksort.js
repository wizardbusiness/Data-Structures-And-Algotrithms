const unsorted = [0, 5, 3, 2, 1, 10, 100, -100, 200, 19, 2, -200];
const unsorted2 = [20];

/**
 * @function quicksort
 * @description sorts an array of ints from smallest to greatest
 * using a pivot element to divide and conquer and then partition the array in O(nlogn) time
 * @param {int[]}
 * @param {int} start - partition start
 * @param {int} end - partition end
 */

function quicksort(array, start = 0, end = array.length - 1) {
  if (start >= end) return;

  const pivotIndex = partition(array, start, end);

  quicksort(array, start, pivotIndex - 1);
  quicksort(array, pivotIndex + 1, end);
}

/**
 * @function partition
 * @description swaps elements inside a partition around a pivot value and finds the correct pivot index
 * @param {int[]}
 * @param {int} start partition start
 * @param {int} end partition end
 */

// function partition(array, start, end) {
//   const pivotValue = array[end];
//   let pivotIndex = start;

//   for (let i = start; i < end; i++) {
//     if (array[i] < pivotValue) {
//       [array[i], array[pivotIndex]] = [array[pivotIndex], array[i]];
//       pivotIndex++;
//     }
//   }
//   [array[pivotIndex], array[end]] = [array[end], array[pivotIndex]];
//   return pivotIndex;
// }

function partition(array, start, end) {
  const pivotValue = array[end];

  let i = start;
  let j = end;

  // move i towards j until i is equal to j
  while (i <= j) {
    if (array[i] <= pivotValue) {
      i++;
    }
    if (array[j] >= pivotValue) {
      j--;
    }

    if (array[i] > pivotValue && array[j] < pivotValue) {
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  [array[i], array[end]] = [array[end], array[i]];

  return i;

  // if array[j] is greater than pivot value
  // move j towards middle
  // if array[i] is less than pivot value
  // move i towards middle

  // if array[i] is greater than pivotValue and
  // array[j] is less than pivotValue
  // swap

  // insert pivot value at i
}

quicksort(unsorted);
console.log(unsorted);
