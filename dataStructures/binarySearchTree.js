/**
 * @class Node
 * @constructor
 * @param {string | number} value
 * @property { Node | null} left - The left child node (default is null)
 * @property { Node | null } right - The right child node (default is null)
 * @property { number } count - The value count the node holds (for duplicate values)
 */

class Node {
  constructor(value) {
    this.value = value;
    this.count = 0;
    this.left = null;
    this.right = null;
  }
}

/**
 * @class BST
 * @property {object} root - the binary search tree object
 */

class BST {
  constructor() {
    this.root = null;
  }

  /**
   * Adds a node to the binary search tree
   * @param {number} value - the value to be added to the tree
   * @returns {void}
   */

  add(value) {
    let currNode = this.root;
    // if root is null, add root node

    if (!this.root) {
      this.root = new Node(value);
    }
    while (currNode) {
      if (value < currNode.value) {
        if (currNode.left === null) {
          currNode.left = new Node(value);
          currNode.left.count += 1;
          break;
        } else {
          currNode = currNode.left;
        }
      } else if (value > currNode.value) {
        if (currNode.right === null) {
          currNode.right = new Node(value);
          currNode.right.count += 1;
          break;
        } else {
          currNode = currNode.right;
        }
      } else if (value === currNode.value) {
        currNode.count += 1;
        break;
      }
    }
    // traverse the tree until a null object is found, then instantiate the new node there
    // less than parent value, go left, more than parent value go right
  }

  /**
   * Deletes a node from the binary search tree
   * @param {number} - value
   * @returns {void}
   *
   */

  /**
   * Finds a value in the binary search tree
   * @param {number} - value
   * @returns {boolean}
   */

  /**
   * Prints the nodes in the binary search tree
   * @returns {string}
   */
}

const bst = new BST();

const values = [10, 9, 2, 4, 5, 10, 23, 2];
function addValuesToBst(values, bst) {
  values.forEach((value) => bst.add(value));
}
addValuesToBst(values, bst);
