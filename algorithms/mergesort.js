// https://stackabuse.com/merge-sort-in-javascript/

const unsorted = [0, 3, 1, 4, -2, -10, 2, 10, 8, 31];

/**
 * @function mergesort
 * @param {int[]} array
 * @returns {int[]}
 *
 * sorts an array of values from least to greatest in Onlogn
 */

function mergesort(array) {
  // if array length is 1 or less, array is sorted

  if (array.length <= 1) return array;

  const mid = Math.floor(array.length / 2);

  const l = mergesort(array.slice(0, mid));
  const r = mergesort(array.slice(mid));

  return merge(l, r);
}

/**
 * @function merge
 * @param {int[]} l unsorted array
 * @param {int[]} r unsorted array
 * compares elements from two input arrays and orders them from least to greatest in a sorted array
 */

function merge(l, r) {
  const sorted = [];
  while (l.length && r.length) {
    if (l[0] < r[0]) sorted.push(l.shift());
    else sorted.push(r.shift());
  }

  return [...sorted, ...l, ...r];
}

console.log(mergesort(unsorted));
