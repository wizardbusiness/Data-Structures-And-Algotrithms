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
   * @method leftChild
   * @param {number} index
   * @description finds the left child index from the passed in parent index
   */

  leftChild(index) {
    return index * 2 + 1;
  }

  /**
   * @method rightChildIndex
   * @param {number} index
   * @description finds the right child index from the passed in parent index
   */

  rightChild(index) {
    return index * 2 + 2;
  }

  /**
   * @method swap
   * @param {number} a
   * @param {number} b 
   * @description swaps the elements at index a and b. used to move elements up the heap
   */

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]]
  }


  /**
   * @method insert
   * @param {any} item
   * @description inserts the passed in item into the heap and moves it to the correct location
   */

  // insert(item) {
  //   this.heap.push(item);
  //   let index = this.heap.length - 1
  //   let parentIndex = this.parentIndex(index);
    
  //   while(this.heap[parentIndex] && this.heap[parentIndex] <  this.heap[index] ) {
  //     this.swap(parentIndex, index);
  //     index = this.parentIndex(index)
  //     parentIndex = this.parentIndex(index)
  //   }

  // }

  /**
   * @method insert 
   * @param {number} value
   * @description inserts a value at the bottom of the heap and moves it to the correct location in the heap
   */

  insert(value) {
    // insert at bottom
    this.heap.push(value);
    // get index
    // get parent index 
    let index = this.heap.length - 1;
    let pIndex = this.parentIndex(index);

    while (this.heap[pIndex] && this.heap[index] > this.heap[pIndex]) {
      this.swap(index, pIndex);
      index = pIndex;
      pIndex = this.parentIndex(index);
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

let insertItems = [5, 10, 11, 0]
insertItems.forEach(item => newHeap.insert(item))


console.log(newHeap.heap);
// newHeap.remove();
console.log(newHeap.heap);
