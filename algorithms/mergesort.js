// https://stackabuse.com/merge-sort-in-javascript/

const unsorted = [0, 3, 1, 4, -2, -10, 2, 10, 8, 31];

/**
 * @function mergesort
 * @param {number[]} array
 * @description recursively divides array and merges it to sort in nlogn time and n space
 */


function mergesort(array) {
  if (array.length <= 1) return array;
  const mid = Math.floor(array.length / 2);
  const l = mergesort(array.slice(0, mid));
  const r = mergesort(array.slice(mid));

  return merge(l, r)
  
}

/**
 * @function merge
 * @param {number[]} left 
 * @param {number[]} right
 * @description merges two halves of array with elements in order
 */

function merge(left, right) {
  const sorted = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }

  return [...sorted, ...left, ...right]
}

console.log(mergesort(unsorted))



