// https://stackabuse.com/merge-sort-in-javascript/

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  // recursively divide array in two
  const sliceIndex = Math.floor(arr.length / 2);
  const l = mergeSort(arr.slice(0, sliceIndex));
  
  const r  = mergeSort(arr.slice(sliceIndex));
  

  return sort(l, r);
}

const sort = (l, r) => {
  const sorted = [];
  while (l.length && r.length) {
    if (l[0] < r[0]) sorted.push(l.shift());
    else sorted.push(r.shift());
  }

  return [...sorted, ...l, ...r];
}

console.log(mergeSort([2, -1, 10, 15, 3, 1, 7, -10]));