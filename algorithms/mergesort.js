// https://stackabuse.com/merge-sort-in-javascript/

const mergeSort = (array) => {
  if (array.length <= 1) return array;
  const mid = array.length / 2;

  const l = mergeSort(array.slice(0, mid));
  const r = mergeSort(array.slice(mid));

  return sort(l, r);
}

const sort = (l, r) => {
  const sorted = [];

  while(l.length && r.length) {
    if (l[0] < r[0]) sorted.push(l.shift());
    else sorted.push(r.shift())
  }

  return [...sorted, ...l, ...r];
}

console.log(mergeSort([1, 2, 3, 2, 0, -12, 20, 4]));