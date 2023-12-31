/** Divide and Conquer. Divide array repeatedly in half until either middle element is found or array is empty */

/**
 * @param {number} target - target number
 * @param {number[]} array - sorted array
 * @returns {number} - index of target number or -1
 */

const binarySearch = (array, target) => {
  // if target is found, return index
  // mid index
  // split array in half
  const midIndex = Math.floor(array.length / 2);
  if (array[midIndex] === target) return midIndex;
  binarySearch(array.slice(0, midIndex), target);
  binarySearch(array.slice(midIndex + 1), target);

  return -1;
};
