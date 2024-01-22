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

  const pivotIndex = partition1(array, start, end);

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

// for loop partition method
function partition1(array, start, end) {
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

// while loop partition method
function partition2(array, start, end) {
  const pivotValue = array[end];

  let i = start;
  let j = end;

  while (i <= j) {
    do {
      i++;
    } while (array[i] < pivotValue);
    do {
      j--;
    } while (array[j] > pivotValue);

    if (i <= j) {
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  [array[i], array[end]] = [array[end], array[i]];
  return i;
}

quicksort(unsorted);
console.log(unsorted);
