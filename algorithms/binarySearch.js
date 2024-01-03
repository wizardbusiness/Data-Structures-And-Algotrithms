/** Divide and Conquer. Divide array repeatedly in half until either middle element is found or array is empty */

/**
 * @param {number} target - target number
 * @param {number[]} array - sorted array
 * @param {number} start - starting index
 * @param {number} end - ending index
 * @returns {number} - index of target number or -1
 */

const binarySearch = (array, target, start = 0, end = array.length - 1) => {
  // if target is found, return index
  // mid index
  // search from start to end

  const midIndex = Math.floor((end - start) / 2) + start;
  if (array[midIndex] === target) return midIndex;
  if (target < array[midIndex]) {
    // console.log(midIndex);

    return binarySearch(array, target, start, midIndex - 1);
  } else if (target > array[midIndex]) {
    return binarySearch(array, target, midIndex + 1, end);
  }

  return -1;
};

const testArray = [1, 2, 4, 6, 10, 12, 1000];

console.log(binarySearch(testArray, 10));
