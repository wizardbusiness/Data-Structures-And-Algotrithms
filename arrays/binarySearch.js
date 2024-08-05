/** Divide and Conquer. Divide array repeatedly in half until either middle element is found or array is empty */

/**
 * @function binarySearch
 * @param { number } target
 * @param { number[] } sortedArray
 * 
 * time complexity O(logn);
 * space complexity O(logn);
 */

function binarySearch(target, array, i=0, j=array.length - 1) {
  if (i > j) return -1;
  const mid = Math.round((j + i) / 2);
  console.log(mid)
  
  if(target === array[mid]) return mid;
  else if (target < array[mid]) return binarySearch(target, array, i, mid - 1);
  else if (target > array[mid]) return binarySearch(target, array, mid + 1, j);
}

console.log(binarySearch(8, [1, 2, 3, 4, 5, 8]));

