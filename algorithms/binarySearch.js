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
  console.log(array[midIndex]);
  if (target < array[midIndex]) {
    const left = array.slice(0, midIndex);
    return binarySearch(left, target);
  } else if (target > array[midIndex]) {
    const right = array.slice(midIndex + 1, array.length);
    return binarySearch(right, target);
  }
};

const testArray = [1, 2, 4, 6, 10, 12, 1000];

console.log(binarySearch(testArray, 1));
