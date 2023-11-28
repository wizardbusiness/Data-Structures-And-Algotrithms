// const partitionArray = (arr) => {
//   // choose pivot
//   const pivot = arr[arr.length - 1];
//   // exclude pivot from partition
//   const partition = arr.slice(0, arr.length - 1);
//   // set i and j to the beginning and end of array
//   let i = 0;
//   let j = partition.length - 1;
//   // while i is less than j
//   while (i < j) {
//     // if el at i is larger than pivot val and el at j is less than pivot val
//     if (partition[i] > pivot && partition[j] < pivot) {
//       // save els to variables
//       const el1 = partition[i];
//       const el2 = partition[j];
//       // swap els
//       partition[i] = el2;
//       partition[j] = el1;
//     }
//     // otherwise move i and j towards each other
//     if (partition[j] > pivot) {
//       j--
//     }
//     if (partition[i] < pivot) {
//       i++
//     }
//   }
//   partition.splice(i, 0, pivot);
//   return partition;
// }

// const split = (arr, pivot) => {
//   if (arr.length <= 2) return arr;
//   return split()
// }

// const quickSort = (arr) => {

// }
// const test = [3, 4, 8, 1, 7, 5];
/**
 *
 * @param {number []} arr
 * @returns {number []}
 */
const quickSort = (arr) => {
  // base case
  // if array length is 1 return as sorted
  if (arr.length <= 1) return arr;
  // recursive
  // pick a pivot
  const pivot = arr[arr.length - 1]; // easy pivot pick, should be random to prevent worst case though
  // sort els less than into left and els greater than into right arrays
  const l = [];
  const r = [];
  arr.forEach((el) => {
    if (el < pivot) l.push(el);
    else if (el > pivot) r.push(el);
  });
  // quicksort left and right

  const left = quickSort(l);
  const right = quickSort(r);

  // return arrays back up, spread left, pivot and right into new array
  return [...left, pivot, ...right];
};

const unsorted = [0, 5, 3, 2, 1, 10, 100, -100, 200, 19, 2, -200];

console.log(quickSort(unsorted));
