/** Divide and Conquer. Divide array repeatedly in half until either middle element is found or array is empty */

/**
 * @function binarySearch
 * @param { number } target
 * @param { number[] } sortedArray
 * 
 * time complexity O(logn);
 * space complexity O(logn);
 */

function binarySearch(target, array, i = 0, j = array.length - 1) {
  if (i > j) return -1;

  const mid = Math.floor((i + j) / 2);

  if (array[mid] === target) return mid;
  else if (target < array[mid]) return binarySearch(target, array, i, mid - 1);
  else return binarySearch(target, array, mid + 1, j);
}

const sortedArray = [1, 2, 4, 50, 51];
console.log(binarySearch(50, sortedArray));

