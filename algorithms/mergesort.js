const unsorted = [0, 3, 1, 4, -2, 10, 8, 31];

/**
 * @function mergesort sorts an unsorted array using divide and conquer
 * @param {int[]} array - unsorted array of ints
 */

function mergesort(array) {
  if (array.length <= 1) return array;

  const middle = Math.floor(array.length / 2);
  const l = array.slice(0, middle);
  const r = array.slice(middle);
  return merge(mergesort(l), mergesort(r));
}

/**
 * @function merge - merges sorted arrays together
 * @param {int[]} l - left array of ints
 * @param {int[]} r - right array of ints
 */

function merge(l, r) {
  const sorted = [];

  while (l.length && r.length) {
    if (l[0] <= r[0]) {
      sorted.push(l.shift());
    } else if (r[0] < l[0]) {
      sorted.push(r.shift());
    }
  }
  return [...sorted, ...l, ...r];
}

// console.log(mergesort(unsorted));
