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
  delete(value, currNode = this.root) {
    // base case
    // if currNode is null return -1

    // recursive
    // if value is less than currNode value
      // recurse currNode's left
    // else if value is greater than currNode value
      // recurse currNode's right
    // else if value equals currNode value
    // if leaf node
    // if currNodes 
      // repoint parents pointer to null
    // if one child
      // repoint parents pointer to removed node's child
      // right node only
        // repoint parents right to childs right
      // left node only
        // repoint parents right to childs left
    // if two children
      // assign temp pointer to left
      // assign temp pointer to right
      // point parents right to childs right
      // traverse from temp pointer at right passing in root value of left
      // reattach left
  }

  /**
   * Finds a value in the binary search tree
   * @param {number} - value
   * @returns {boolean}
   */
  find(value) {
    let currNode = this.root;
    while (currNode) {
      if (value === currNode.value) {
        return true;
      } else if (value < currNode.value) {
        currNode = currNode.left;
      } else if (value > currNode.value) {
        currNode = currNode.right;
      }
    }
    return false;
  }
}

const bst = new BST();

const values = [10, 9, 2, 4, 5, 10, 23, 2];
function addValuesToBst(values, bst) {
  values.forEach((value) => bst.add(value));
}

addValuesToBst(values, bst);

bst;
