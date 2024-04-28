/**
 * @class Node
 * @constructor
 * @param {string | number} value - value being stored in linked list
 * @param {Node | null} next - pointer to next node in linked list
 */

class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/**
 * @class LinkedList
 * @constructor
 * @param {ListNode | null} head - the head of the list
 * @param {ListNode | null} tail - the tail of the list
 */

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  /**
   * @method add
   * @param {string | number} value - value to be added to the tail of the linked list
   * @description Adds a value to the linked list.
   */

  add(value) {
    if (!this.head) {
      this.head = new ListNode(value)
      this.tail = this.head;
      return;
    } 

    this.tail.next = new ListNode(value);
    this.tail = this.tail.next;
  }

  /**
   * @method insert
   * @param { string | number } value
   * @param { number } targetPosition
   * @description Inserts a node at the target position in the linked list
   */

  insert(value, targetPosition) {
    let currNode = this.head;
    let currPosition = 0;
    while (currPosition < targetPosition) {
      if (!currNode) return -1;
      currNode = currNode.next;
      currPosition++;
    }
    const insertedNode = new ListNode(value);
    insertedNode.next = currNode.next;
    currNode.next = insertedNode;
  }

  /**
   * @method remove
   * @description Removes a value from the linked list
   * @param {string | number} value -value to be removed from the linked list
   */

  remove(value) {
    // node at head
    // remove reference to head node by pointing it to next node
    // O(1)
    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }
    // node in body including tail
    // iterate through the list until you find the value being removed
    let currNode = this.head;
    while (currNode) {
      if (currNode.next.value === value) {
        // point the next reference on the previous node to the next node of the node to be removed
        currNode.next = currNode.next.next;
        if (currNode.next === null) this.tail = currNode;
        return;
      }
      currNode = currNode.next;
    }
    // if value not found return -1
    return -1;
  }

  /**
   * @method shift
   * @description shifts the head of the linked list and returns its value
   * @returns {string | number}
   */

  shift() {
    const value = this.head.value;
    this.head = this.head.next;
    return value;
  }

  /**
   * @method pop
   * @description pops the tail of the linked list and returns its value
   * @returns {string | number}
   */

  pop() {
    const value = this.tail.value;
    if (this.tail === this.head) {
      this.head = null;
      this.tail = null;
      return
    }

    let curr = this.head; 

    while(curr.next.next) {
      curr = curr.next;
    }
    this.tail = curr;
    curr.next = null;
    
    return value
  }

  /**
   * @method print
   * @description Prints the values in the linked list in sequence
   * @returns {string}
   */

  print() {
    let print = "";
    let curr = this.head;
    while (curr) {
      if (curr.next === null) print += String(curr.value);
      else print += `${curr.value} -> `;
      curr = curr.next;
    }
    return print;
  }

  /**
   * @method find
   * @description Finds a value in the linked list
   * @param {string | number}
   * @returns {boolean}
   */

  find(value) {
    let curr = this.head;
    while (curr) {
      if (curr.value === value) return value;
      curr = curr.next;
    }
    return -1;
  }

  /**
   * @method reverse
   * @description Reverses a linked list in place
   * Uses 3 pointers, prev, current, next
   * Pointer names refer to the 3 nodes involved in reversal
   * 1. prev - points to the current head of the reversed list
   * 2. curr - points to the current head of the unreversed list
   * 3. next - points to the node which will become the head of the reversed list
   * @param {ListNode} ll - the linked list
   * @returns {void}
   */

  reverse() {
    let prev = null;
    let curr = this.head;
    let next = this.head;
    this.tail = this.head;

    while (curr) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }
}

const ll = new LinkedList();
ll.add(0);
ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);
ll.add(5);
console.log(ll.print());
ll.reverse();
console.log(ll);
console.log(ll.print());
ll.poop();
console.log(ll.print());
ll.poop();
console.log(ll.print());
ll.insert(20, 10);
console.log(ll.print());
ll.poop();


