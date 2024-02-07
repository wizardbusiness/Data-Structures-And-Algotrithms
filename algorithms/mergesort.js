const unsorted = [0, 3, 1, 4, -2, 10, 8, 31];
/**
 * @function mergesort
 * @param {int[]} array
 * @description
 * https://stackabuse.com/merge-sort-in-javascript/
 * sorts an array of elements in Onlogn time using divide and conquer and merge
 */

function mergesort(array) {
  if (array.length <= 1) return array;
  const mid = Math.floor(array.length / 2);
  const l = mergesort(array.slice(0, mid)); // returns sorted left side
  const r = mergesort(array.slice(mid)); // returns sorted right side

  return merge(l, r);
}

/**
 * @function merge
 * @param {int[]} l
 * @param {int[]} r
 * @description
 * compares elements in two input arrays and sorts them into a new array
 */

function merge(l, r) {
  const sorted = [];
  while (l.length && r.length) {
    if (l[0] < r[0]) {
      sorted.push(l.shift());
    } else if (r[0] <= l[0]) {
      sorted.push(r.shift());
    }
  }

  return [...sorted, ...l, ...r];
}

console.log(mergesort(unsorted));
