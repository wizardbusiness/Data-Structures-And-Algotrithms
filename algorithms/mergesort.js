/**
 *
 * @param {[]} array - takes an unsorted array
 * @returns {[]} - returns a sorted array
 */
const mergeSort = (array) => {
  function bifurcate(array) {
    // split the array in two until the base case is met
    // base case: array has 0 or 1 elements
    console.log(array);
    if (array.length <= 1) return array;

    // recursive: bifurcate the array recursively
    const mid = Math.floor(array.length / 2);
    const left = bifurcate(array.slice(0, mid));
    const right = bifurcate(array.slice(mid));

    return merge(left, right);
  }
  function merge(left, right) {
    // while left and right
    const sorted = [];
    while (left.length && right.length) {
      // compare elements in each array
      // sort smaller one left,
      // sort larger right
      if (left[0] < right[0]) {
        sorted.push(left.shift());
      } else {
        sorted.push(right.shift());
      }
    }
    return [...sorted, ...left, ...right];
    // merge left, remainder and right
  }
  console.log(bifurcate(array));
  return bifurcate(array);
};

mergeSort([1, 29, 19, 10, 22, 9, 0, 3]);
