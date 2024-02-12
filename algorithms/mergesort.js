// https://stackabuse.com/merge-sort-in-javascript/

const unsorted = [0, 3, 1, 4, -2, -10, 2, 10, 8, 31];
/**
 * @function mergesort
 * @param {int[]} array
 * @description
 * https://stackabuse.com/merge-sort-in-javascript/
 * sorts an array of elements in Onlogn time using divide and conquer and merge
 */

function mergesort(array) {
  if (array.length <= 1) return array;

  const midpoint = Math.floor(array.length / 2);

  const l = mergesort(array.slice(0, midpoint));
  const r = mergesort(array.slice(midpoint));

  return merge(l, r);
}

/**
 * @function merge
 * @param {int[]} l left half of array to be merged
 * @param {int[]} r right half of array to be merged
 * @description merges two unsorted arrays into a single sorted array
 */

function merge(l, r) {
  const sorted = [];
  while (l.length && r.length) {
    if (l[0] < r[0]) {
      const smaller = l.shift();
      sorted.push(smaller);
    } else {
      const smaller = r.shift();
      sorted.push(smaller);
    }
  }

  return [...sorted, ...l, ...r];
}

console.log(mergesort(unsorted));
