/** Divide and Conquer. Divide array repeatedly in half until either middle element is found or array is empty */

/**
 * @param {number} target - target number
 * @param {number[]} array - sorted array
 * @param {number} start - starting index
 * @param {number} end - ending index
 * @returns {number} - index of target number or -1
 */

const binarySearch = (array, target, start = 0, end = array.length - 1) => {
  if (start > end) return;

  const midpoint = Math.floor((start + end) / 2);

  if (array[midpoint] === target) return midpoint;
  else if (target > array[midpoint])
    return binarySearch(array, target, midpoint + 1, end);
  else if (target < array[midpoint])
    return binarySearch(array, target, start, midpoint - 1);
};

const testArray = [1, 2, 4, 6, 10, 12, 1000];

console.log(binarySearch(testArray, 1));
