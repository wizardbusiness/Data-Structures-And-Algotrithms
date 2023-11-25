// repeatedly divide the search area in half
/**
 * @param {array} arr
 * @param {number} val
 * @returns {boolean} true or false
 */
const binarySearch = (val, arr) => {
  // base case
  // if array length is 0, return false
  if (arr.length === 0) return false;
  // choose middle element
  const middle = Math.floor(arr.length / 2);
  console.log(arr[middle]);
  // if equal to, return true
  if (val === arr[middle]) return true;
  // check if value is less than or greater than the element
  // if value is less than middle, repeat with left half of array
  if (val < arr[middle]) {
    const halvedArrL = arr.slice(0, middle);
    console.log(halvedArrL);
    return binarySearch(val, halvedArrL);
    // else if greater than middle, repeat with right half of array
  } else if (val > arr[middle]) {
    const halvedArrR = arr.slice(middle + 1, arr.length);
    return binarySearch(val, halvedArrR);
  }
};

console.log(binarySearch(60, [1, 2, 3, 4, 6, 60, 70]));

