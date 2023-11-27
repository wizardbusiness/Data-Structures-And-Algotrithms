/** Divide and Conquer. Divide array repeatedly in half until either middle element is found or array is empty */

/**
 *
 * @param {number[]} arr
 * @param {number} val
 * @returns {boolean}
 */
const binarySearch = (arr, val) => {
  // handle edge cases
  if (typeof val !== "number") return "invalid value";
  if (!Array.isArray(arr)) return "no valid array found";
  // base case
  // if array is empty return false
  if (arr.length === 0) return false;
  // get mid index
  const midIndex = Math.floor(arr.length / 2);
  // if mid equals val, return true
  if (typeof arr[midIndex] !== "number") return "array contains invalid values";
  if (arr[midIndex] === val) return true;
  // recursive
  // if val is greater than mid, recurse with right half of array
  if (val > arr[midIndex]) {
    const right = arr.slice(midIndex + 1, arr.length);
    return binarySearch(right, val);
  } else if (val < arr[midIndex]) {
    // else if val is less than id, recurse with left half of array
    const left = arr.slice(0, midIndex);
    return binarySearch(left, val);
  }
};

const test = [1, 2, 3, 4, 5];
console.log(binarySearch(test, 1)); // true
