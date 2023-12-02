const unsorted = [0, 5, 3, 2, 1, 10, 100, -100, 200, 19, 2, -200];
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
 * @param {number[]} arr
 * @param {number} low
 * @param {number} high
 * @returns {number[]}
 */

// const hoarePartition = (arr, low, high) => {
//   // pointers i and j
//   let i = low - 1;
//   let j = high + 1;
//   // pivot arr low or high
//   let pivot = arr[high];
//   // move i and j towards each other while el i is less than pivot and el j is greater than pivot
//   // and is less than j
//   while (true) {
//     do {
//       i++;
//     } while (arr[i] < pivot);
//     do {
//       j--;
//     } while (arr[j] > pivot);
//     // if i is greater than or equal to j return j
//     if (i >= j) return j;
//     // swap el i with el j
//     let tempi = arr[i];
//     arr[i] = arr[j];
//     arr[j] = tempi;
//   }
// };

// const hoaresQuicksort = (arr, low, high) => {
//   // base
//   // if low is less than high
//   if (low < high) {
//     // partition array from low to high, store in const
//     const pivotIndex = hoarePartition(arr, low, high);
//     // run quicksort on array from low to j as returned from partition
//     hoaresQuicksort(arr, low, pivotIndex);
//     // run quicksort on array from j + 1 to high
//     hoaresQuicksort(arr, hoarePartition + 1, high);
//   }
// };

// console.log(hoaresQuicksort(unsorted, 0, unsorted.length - 1));

// /**
//  *
//  * @param {number []} arr
//  * @returns {number []}
//  *
//  * Pick a pivot, split everything to left and right, quicksort until array has one or less els
//  */
// const lomutoQuickSort = (arr) => {
//   // base case
//   // if array length is 1 return as sorted
//   if (arr.length <= 1) return arr;
//   // recursive
//   // pick a pivot
//   const pivot = arr[arr.length - 1]; // easy pivot pick, should be random to prevent worst case though
//   // sort els less than into left and els greater than into right arrays
//   const l = [];
//   const r = [];
//   arr.forEach((el) => {
//     if (el < pivot) l.push(el);
//     else if (el > pivot) r.push(el);
//   });
//   // quicksort left and right

//   const left = lomutoQuickSort(l);
//   const right = lomutoQuickSort(r);

//   // return arrays back up, spread left, pivot and right into new array
//   return [...left, pivot, ...right];
// };

// console.log(lomutoQuickSort(unsorted));
