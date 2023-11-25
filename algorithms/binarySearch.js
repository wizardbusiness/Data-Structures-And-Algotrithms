// divide array in half repeatedly according to whether passed in value is greater or less than that of middle value
// if passed in is equal to middle, return true
// if array is empty, return false

/**
 *
 * @param {number[]} arr sorted array
 * @param {number} val
 * @returns {boolean}
 * recursively divides array in two until array is empty or passed in value is equal to the arrays middle value
 */
const binarySearch = (arr, val) => {
  // base
  // if array is empty, return false
  if (arr.length === 0) return false;
  // choose middle index
  const midIndex = Math.floor((arr.length - 1) / 2);
  // if val equals middle value return true
  if (val === arr[midIndex]) return true;
  // else if val is greater than middle value slice array from middle to end
  else if (val > arr[midIndex]) {
    const greaterThan = arr.slice(midIndex + 1, arr.length);
    console.log(greaterThan);
    return binarySearch(greaterThan, val);
    // else if val is less than mid val slice array from start to middle
    // recurse binary search with sliced array
  } else if (val < arr[midIndex]) {
    const lessThan = arr.slice(0, midIndex);
    console.log(lessThan);
    return binarySearch(lessThan, val);
  }
};

const test = [1, 2, 3, 4, 5, 20, 100, 101, 102, 105];

console.log(binarySearch(test, 102));
