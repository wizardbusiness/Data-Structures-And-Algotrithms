
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

const quicksort = (arr) => {
  if (arr.length <= 1) return arr;
  const pivot = arr[arr.length - 1];
  const leftArr = [];
  const rightArr = [];
  arr.forEach(el => {
    if (el < pivot) leftArr.push(el);
    else if (el > pivot) rightArr.push(el);
  });

  const left = quicksort(leftArr);
  const right = quicksort(rightArr);

  return [...left, pivot, ...right];
};

const test = [3, 4, 8, 1, 7, 5, 10, 13, 0];
console.log(quicksort(test));


