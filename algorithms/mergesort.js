/**
 *
 * @param {number[]} array
 */
const mergeSort = (array) => {
  // base case: arrays with 1 or 0 elements are sorted, return those
  if (array.length <= 1) return array;
  // recursive: split arrays in half until they contain one or 0 elements
  const mid = Math.floor(array.length / 2);
  const left = mergeSort(array.slice(0, mid));
  const right = mergeSort(array.slice(mid));
  // merge sorted left and right
  return merge(left, right);
};

/**
 *
 * @param {number[]} left
 * @param {number[]} right
 */

const merge = (left, right) => {
  // declare sorted variable assigned empty array.
  const sorted = [];
  // loop through elements while left and right
  while (left.length && right.length) {
    // compare left and right elements,
    // push smaller, then larger to sorted
    if (left[0] <= right[0]) {
      sorted.push(left.shift());
    } else sorted.push(right.shift());
  }

  return [...sorted, ...left, ...right];
};

const testArr = [0, 2, 1, 10];

console.log(mergeSort(testArr));
