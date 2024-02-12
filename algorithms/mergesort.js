// https://stackabuse.com/merge-sort-in-javascript/

const unsorted = [0, 3, 1, 4, -2, -10, 2, 10, 8, 31];

/**
 * @function mergesort
 * @param {int[]} array
 * @returns {int[]}
 * @description
 * divides and conquers an unsorted array and returns a sorted array
 */

function mergesort(array) {
  // base case - arrays with 0 or 1 elements are sorted
  if (array.length <= 1) return array;
  // divide and conquer
  const mid = Math.floor(array.length / 2);
  const l = mergesort(array.slice(0, mid));
  const r = mergesort(array.slice(mid));

  return merge(l, r);
}

/**
 * @function merge
 * @param {int[]} l
 * @param {int[]} r
 * @returns {int[]}
 * @description
 * Sorts left and right input arrays into a single sorted array
 * and returns the result
 */

function merge(l, r) {
  const sorted = [];

  while (l.length && r.length) {
    let smallerVal;
    if (l[0] < r[0]) {
      smallerVal = l.shift();
      sorted.push(smallerVal);
    } else {
      smallerVal = r.shift();
      sorted.push(smallerVal);
    }
  }

  return [...sorted, ...l, ...r];
}

console.log(mergesort(unsorted));
