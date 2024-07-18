// https://stackabuse.com/merge-sort-in-javascript/

const numArray = [1, 3, -3, 10, 4, -20, 100]
const mergeSort = (array) => {
  if (array.length <= 1) return array;
  const mid = Math.round(array.length / 2)
  const l = mergeSort(array.slice(0, mid));
  const r = mergeSort(array.slice(mid));

  return (merge(l, r));
}

const merge = (l, r) => {
  const sorted = [];

  while(l.length > 0 && r.length > 0) {
    if (l[0] < r[0]) sorted.push(l.shift())
    else sorted.push(r.shift())
  }

  return [...sorted, ...l, ...r];
}

console.log(mergeSort(numArray));

