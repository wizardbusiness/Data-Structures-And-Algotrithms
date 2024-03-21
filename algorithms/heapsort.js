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
    return Math.floor((index - 1) / 2)
  }

  /**
   * @method leftChildIndex
   * @param {int} index
   * @description finds the index of the left child of the element at the passed in index
   */

  leftChildIndex(index) {
    return index * 2 + 1
  }

  /**
   * @method rightChildIndex
   * @param {int} index
   * @description finds the index of the right child of the element at the passed in index
   */

  rightChildIndex(index) {
    return index * 2 + 2
  }

  /**
   * @method swap
   * @param {int} a index of item a
   * @param {int} b index of item b
   * @description swaps the elements at indexes a and b
   */

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]]
    return 
  }
  /**
   * @method insert
   * @param {any} item
   * @description inserts the passed in item into the heap and moves it to the correct location
   */

  insert(item) {
    this.heap.push(item);
    let index = this.heap.length - 1
    let parentIndex = this.parentIndex(index);
    
    while(this.heap[parentIndex] && this.heap[parentIndex] <  this.heap[index] ) {
      this.swap(parentIndex, index);
      index = this.parentIndex(index)
      parentIndex = this.parentIndex(index)
    }

  }
  /**
   * @method remove
   * @description removes the root of the heap
   * larger of the two elements gets swapped with the root
   */

  remove() {
    const removedItem = this.heap.shift();
    const newRoot = this.heap.unshift(this.heap.pop());
    let index = 0;
    let leftChild = this.leftChildIndex(index);
    let rightChild = this.rightChildIndex(index);

    while (
      (this.heap[leftChild] && this.heap[index] < this.heap[leftChild]) ||
      (this.heap[rightChild] && this.heap[index] < this.heap[rightChild])
    ) {
      let max = leftChild;
      if (this.heap[rightChild] > this.heap[leftChild]) max = rightChild;
      this.swap(index, max);
      index = max;
      leftChild = this.leftChildIndex(index);
      rightChild = this.rightChildIndex(index);
    }
  }
}



const newHeap = new MaxHeap();

let insertItems = [1, 4, 10, 20, 30, 19, 412]
insertItems.forEach(item => newHeap.insert(item))


console.log(newHeap.heap);
// newHeap.remove();
console.log(newHeap.heap);
