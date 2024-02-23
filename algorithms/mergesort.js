// https://stackabuse.com/merge-sort-in-javascript/

const unsorted = [0, 3, 1, 4, -2, -10, 2, 10, 8, 31];

/**
 * @function mergesort
 * @param {int[]} array unsorted
 * @return {int[]} sorted
 * @description O(nlogn) time O(nlogn) space stable sort
 */

function mergesort(array) {
  const mid = array.length / 2;

  // base
  if (array.length <= 1) return array;
  // REMEMBER TO ACTUALLY CALL MERGESORT HAHAHA
  const l = mergesort(array.slice(0, mid));
  const r = mergesort(array.slice(mid));

  // merge
  return merge(l, r);
}

/**
 * @function merge
 * @param {int[]} l unsorted
 * @param {int[]} r unsorted
 * @returns {int[]} [l < r , l, r]
 * @description O(n) time O(n) space queue and merge operation
 */

function merge(l, r) {
  const sorted = [];
  while (l.length && r.length) {
    if (l[0] < r[0]) {
      sorted.push(l.shift());
    } else {
      sorted.push(r.shift());
    }
  }
  return [...sorted, ...l, ...r];
}
console.log(mergesort(unsorted));
