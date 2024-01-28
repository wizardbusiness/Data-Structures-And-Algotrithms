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
   * @param {node} - currNode
   * @param {node} - parent
   * @returns {void}
   *
   */
  delete(value, currNode = this.root, parentNode = this.root, property) {
    // base case
    // if currNode is null return -1
    if (!currNode) return -1;
    // recursive
    // if value is less than currNode value
    if (value < currNode.value) {
      // recurse currNode's left
      parentNode = currNode;
      currNode = currNode.left;
      this.delete(value, currNode, parentNode, "left");
      // else if value is greater than currNode value
    } else if (value > currNode.value) {
      // recurse currNode's right
      parentNode = currNode;
      currNode = currNode.right;
      this.delete(value, currNode, parentNode, "right");
      // else if value equals currNode value
    } else if (value === currNode.value) {
      // if leaf node
      if (currNode.left === null && currNode.right === null) {
        parentNode[property] = null;
        // if one child
        // repoint parents pointer to removed node's child
        // right node only
        // repoint parents right to childs right
        // left node only
        // repoint parents right to childs left
      } else if (currNode.left === null || currNode.right === null) {
        if (currNode.left === null) {
          parentNode[property] = currNode.right;
        } else if (currNode.right === null) {
          parentNode[property] = currNode.left;
        }
        // if two children
      } else if (currNode.left && currNode.right) {
        const leftRoot = currNode.left;
        const rightRoot = currNode.right;
        let tempPointer = rightRoot;
        parentNode[property] = rightRoot;
        while (tempPointer) {
          if (tempPointer.left === null) {
            tempPointer.left = leftRoot;
            break;
          } else if (leftRoot.value < tempPointer.value) {
            tempPointer = tempPointer.left;
          }
        }
      }
    }
  }
  /**
   * @method dfs
   * @description searches whole tree and prints all nodes in depth first order
   */
  printAllPaths(currNode = this.root) {
    let paths = [];
    const dfsPreOrder = (currNode, currPath = []) => {
      if (currNode === null) {
        return;
      }
      currPath.push(currNode.value);
      if (currNode.left === null && currNode.right === null) {
        paths.push([...currPath]);
        currPath.pop();
      } else {
        dfsPreOrder(currNode.left, currPath);
        dfsPreOrder(currNode.right, currPath);
      }
    };
    dfsPreOrder(currNode);
    return paths;
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

const values = [20, 10, 30, 5, 40, 0, 6, 35, 50];
function addValuesToBst(values, bst) {
  values.forEach((value) => bst.add(value));
}

addValuesToBst(values, bst);

console.log(bst);

console.log(bst.printAllPaths());
