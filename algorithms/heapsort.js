// https://stackabuse.com/heap-sort-in-javascript/

// heapify

// parent at n - 1 / 2
// for node at index n
// left child is at 2n + 1
// right child is at 2n + 2

/**
 * @class MaxHeap
 * @constructor heap
 *
 */

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  /**
   * @method parentIndex
   * @param {int} index
   * @description finds the index of the parent of the element at the passed in index
   */

  parentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  /**
   * @method leftChildIndex
   * @param {int} index
   * @description finds the index of the left child of the element at the passed in index
   */

  leftChildIndex(index) {
    return index * 2 + 1;
  }

  /**
   * @method rightChildIndex
   * @param {int} index
   * @description finds the index of the right child of the element at the passed in index
   */

  rightChildIndex(index) {
    return index * 2 + 2;
  }

  /**
   * @method swap
   * @param {int} a index of item a
   * @param {int} b index of item b
   * @description swaps the elements at indexes a and b
   */

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
  /**
   * @method insert
   * @param {any} item
   * @description inserts the passed in item into the heap and moves it to the correct location
   */

  insert(item) {
    this.heap.push(item);
    let index = this.heap.length - 1;
    let parentIndex = this.parentIndex(index);

    while (
      this.heap[parentIndex] &&
      this.heap[index] > this.heap[parentIndex]
    ) {
      this.swap(index, parentIndex);
      index = this.parentIndex(index);
      parentIndex = this.parentIndex(index);
    }
  }
  /**
   * @method remove
   * @description removes the root of the heap
   * larger of the two elements gets swapped with the root
   */

  remove() {
    const removedItem = this.heap.shift();
    this.heap.unshift(this.heap.pop());
    let index = 0;
    let leftChild = this.leftChildIndex(index);
    let rightChild = this.rightChildIndex(index);
    while (
      this.heap[leftChild && this.heap[leftChild]] > this.heap[index] ||
      (this.heap[rightChild] && this.heap[rightChild] > this.heap[index])
    ) {
      let max = leftChild;
      if (this.heap[rightChild] && this.heap[rightChild] > this.heap[max]) {
        max = rightChild;
      }
      this.swap(max, index);
      index = max;
      leftChild = this.leftChildIndex(max);
      rightChild = this.rightChildIndex(max);
    }
    return removedItem;
  }
}

const newHeap = new MaxHeap();
newHeap.insert(10);
newHeap.insert(7);
newHeap.insert(1);
newHeap.insert(5);
newHeap.insert(3);
newHeap.insert(20);
console.log(newHeap.heap);
newHeap.remove();
console.log(newHeap.heap);
