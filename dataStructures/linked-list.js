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
   * @description :
   *  Reverses a linked list in place
   *  Uses 3 temporary pointers to keep track of and reassign the next properties of each node to the previous node.
   *  1. Prev - the previous node in the unreversed list, which will become next in the reversed list.
   *  2. Curr - the current node being reversed
   *  3. Next - the next node in the unreversed list, which will become the prev node
   * @param {ListNode} head - the head of a linked list
   */

  reverse(ll) {
    // the previous node
    // point prev to null
    let prev = null;
    // the next node
    let next = ll.head;
    // the current node
    let curr = ll.head;
    // set tail to head before reversing
    ll.tail = ll.head;
    while (curr) {
      // move head to curr before each reversal
      ll.head = curr;
      // point next to prev
      next = prev;
      // point prev to curr
      prev = curr;
      // point curr to curr.next
      curr = curr.next;
      // point prev.next to next
      prev.next = next;
    }
  }
}

const ll = new LinkedList();
ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);
console.log(ll);
ll.reverse(ll);
ll.add(5);
console.log(ll);
