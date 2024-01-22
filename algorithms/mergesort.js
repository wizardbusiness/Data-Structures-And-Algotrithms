const unsorted = [0, 3, 1, 4, -2, 10, 8, 31];

/**
 * @function mergesort sorts an unsorted array using divide and conquer
 * @param {int[]} array - unsorted array of ints
 */

function mergesort(array) {
  // console.log(array.length);
  if (array.length <= 1) {
    return array;
  }
  const midPoint = Math.floor(array.length / 2);
  const l = mergesort(array.slice(0, midPoint));
  const r = mergesort(array.slice(midPoint));
  return merge(l, r);
}

/**
 * @function merge
 * @param {int[]} l - unsorted array
 * @param {int[]} r - unsorted array
 * @returns {int[]} sorted array
 */

function merge(l, r) {
  const sorted = [];

  while (l.length && r.length) {
    if (l[0] < r[0]) {
      sorted.push(l.shift());
    } else if (l[0] >= r[0]) {
      sorted.push(r.shift());
    }
  }
  console.log([...l, ...sorted, ...r]);
  return [...l, ...sorted, ...r];
}

console.log(mergesort(unsorted));
