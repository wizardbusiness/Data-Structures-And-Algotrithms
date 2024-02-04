// https://stackabuse.com/heap-sort-in-javascript/

// heapify

// parent at n - 1 / 2
// for node at index n
// left child is at 2n + 1
// right child is at 2n + 2

/**
 * @class MaxHeap
 * @description every parent node must be larger than its children
 */
class MaxHeap {
  constructor() {
    this.heap = []; // use array for heap
  }
  //returns parent index
  parentIndex(index) {
    return Math.floor((index - 1) / 2);
  }
  // returns left child index of parent
  leftChildIndex(index) {
    return 2 * index + 1;
  }
  // returns right child index of parent
  rightChildIndex(index) {
    return 2 * index + 2;
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  insert(item) {
    // inserts at the bottom and then makes the inserted item 'climb' the tree
    this.heap.push(item);
    let index = this.heap.length - 1;
    let parent = this.parentIndex(index);
    while (this.heap[parent] && this.heap[parent] < this.heap[index]) {
      this.swap(parent, index);
      index = this.parentIndex(index);
      parent = this.parentIndex(index);
    }
  }
}

const newHeap = new MaxHeap();
newHeap.insert(10);
newHeap.insert(7);
newHeap.insert(1);
console.log(newHeap.heap);
console.log(newHeap.parentIndex(2));
