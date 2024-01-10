const unsorted = [0, 5, 3, 2, 1, 10, 100, -100, 200, 19, 2, -200];

/**
 * @method lomutosQuicksort
 * @param {int[]} array
 * @description sorts an array of unsorted ints in place from least to greatest
 * Strategy - Lomuto partition
 * complexity O(nlogn)
 */

const lomutoPartition = (array, low, high) => {
  // const pivot = array[high];
  // let i = low;
  // let j = high;
  // while (i <= j) {
  //   while (array[i] < pivot) {
  //     i++;
  //   }
  //   while (arr[j] > pivot) {
  //     j--;
  //   }
  //   if (i <= j) {
  //     let temp = arr[i];
  //     arr[i] = arr[j];
  //     arr[j] = temp;
  //     i++;
  //     j--;
  //   }
  // }
  const pivot = array[high];
  // move towards the center of the partition to cover all elements.
  while (low <= high) {
    // find the first element that's greater than pivot on the left.
    while (array[low] < pivot) {
      low++;
    }
    // find the first element that's less than pivot on the right.
    while (array[high] > pivot) {
      high--;
    }
    // we're just making sure that we're in bounds
    if (low <= high) {
      // swap the elements at low and high
      // so the one that's less than the pivot on the right is now on the left,
      // and the one that's greater than the pivot on the right is now on the right;
      let temp = array[low];
      array[low] = array[high];
      array[high] = temp;
    }
  }
};

const quicksort = (array, low = 0, high = array.length - 1) => {
  // pick index
  if (low < high) {
    const partitionIndex = lomutoPartition(array, low, high);
    // recursively sort lower and upper halves of array
    quicksort(arr, low, partitionIndex - 1);
    quicksort(arr, partitionIndex + 1, high);
  }
};
