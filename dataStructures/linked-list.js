/**
 * @class Node
 * @constructor
 * @param {string | number} value - value being stored in linked list
 * @param { number } count - number of times a value has been stored in node
 * @param {Node | null} next - pointer to next node in linked list
 */

class Node {
  constructor(value) {
    this.value = value;
    this.count = 0;
    this.next = null;
  }
}

/**
 * @class LinkedList
 * @constructor
 * @param {Node | null} head - the head of the list
 * @param {Node | null} tail - the tail of the list
 */
