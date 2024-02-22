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
    // if not head, instantiate new node with value
    if (this.head === null) {
      this.head = new ListNode(value);
      this.tail = this.head;
    } else {
      // otherwise instantiate new node at tail
      this.tail.next = new ListNode(value);
      // reassign tail to next
      this.tail = this.tail.next;
    }
  }

  /**
   * @method remove
   * @description Removes a value from the linked list
   * @param {string | number} value -value to be removed from the linked list
   */

  remove(value) {
    // node at head
    // remove reference to head node by pointing it to next node
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

  /**
   * @method pop
   * @description pops the tail of the linked list and returns its value
   * @returns {string | number}
   */

  /**
   * @method print
   * @description Prints the values in the linked list in sequence
   * @returns {string}
   */

  /**
   * @method find
   * @description Finds a value in the linked list
   * @param {string | number}
   * @returns {boolean}
   */

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

  reverse(ll) {
    let prev = null;
    let curr = this.head;
    let next = this.head;
    this.tail = this.head;
    while (curr) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = curr.next;
    }
    this.head = curr;
  }
}

const ll = new LinkedList();
ll.add(0);
ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);
ll.add(5);
console.log(ll);
ll.reverse(ll);
// ll.add(5);
console.log(ll);
