/**
 * mergesort
 * Sort array by dividing it in two recursively and then merging it back together in order
 * @param {number[]} array array of unsorted numbers
 * @returns {number[]} sorted array
 */

const mergeSort = (array) => {
  // if array has 0 or 1 elements return it as sorted
  if (array.length <= 1) return array;
  // split the array in half recursively
  const mid = Math.floor(array.length / 2);
  const left = mergeSort(array.slice(0, mid));
  const right = mergeSort(array.slice(mid));

  // merge them back together
  return merge(left, right);
};

/**
 * merge
 * merge together two arrays in sorted order
 * @param {number[]} left - sorted array
 * @param {number[]} right - sorted array
 * @returns {number[]} sorted array
 */

const merge = (left, right) => {
  const sorted = [];
  // while left and right have elements
  // push smaller than bigger values from left and right
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }

  return [...sorted, ...left, ...right];
};

const unsorted = [0, 2, 200, 100, 98, 1, 3, 5, -1, 1000, 999];

console.log(mergeSort(unsorted));
