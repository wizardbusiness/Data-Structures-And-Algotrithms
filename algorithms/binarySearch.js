/** Divide and Conquer. Divide array repeatedly in half until either middle element is found or array is empty */

/**
 * @param {number} target - target number
 * @param {number[]} array - sorted array
 * @param {number} start - starting index
 * @param {number} end - ending index
 * @returns {number} - index of target number or -1
 */

function binarySearch(array, target, start = 0, end = array.length - 1) {
  if (start > end) return -1;

  const mid = Math.floor((start + end) / 2);

  if (target < array[mid]) {
    return binarySearch(array, target, start, mid - 1);
  } else if (target > array[mid]) {
    return binarySearch(array, target, mid + 1, end);
  } else if (target === array[mid]) {
    return mid;
  }
}

const testArray = [1, 2, 4, 6, 10, 12, 1000];
console.log(binarySearch(testArray, 2)); // 3
