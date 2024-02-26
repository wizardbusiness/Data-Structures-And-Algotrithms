/**
 * @class Node
 */

class Node {
  /**
   * @constructor
   * @param {*} value
   * @property { Node | null } left - left child
   * @property { Node | null } right - right child
   * @property { number } count - store repeat values as a count
   */
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.count = 0;
  }
}

/**
 * @class BinarySearchTree
 * @description Child node values are less than their parents value,
 * and the left child nodes value  is less than the right child nodes value
 */

class BinarySearchTree {
  /**
   * @constructor
   * @param {Node | null} root
   */

  constructor() {
    this.root = null;
  }

  /**
   * @method add
   * @param {int} value
   * @description add a value to the BST in logn time where n is the height of the bst
   */

  add(value) {
    if (this.root === null) this.root = new Node(value);

    let curr = this.root;
    while (curr) {
      if (value < curr.value) {
        if (curr.left) {
          curr = curr.left;
        } else {
          curr.left = new Node(value);
        }
      } else if (value > curr.value) {
        if (curr.right) {
          curr = curr.right;
        } else {
          curr.right = new Node(value);
        }
      } else if (value === curr.value) {
        curr.count++;
        return;
      }
    }
  }

  /**
   * @method remove
   * @param {int} value
   * @description
   * Removes a node from a BST in nLogn time where n is the height of the bst
   */

  removeLeaf(curr, parent) {
    // if at root // we need to remove the base of the root
    if (this.root.value === curr.value) {
      this.root = null;
    } else if (curr.value < parent.value) {
      parent.left = null;
    } else if (curr.value > parent.value) {
      parent.right = null;
    }
  }

  removeNodeWithChildren(curr, parent) {}

  remove(value, parent = this.root, curr = this.root) {
    // base if null return - 1
    if (curr === null) return -1;
    // find the values' node in the bst
    if (value < curr.value && curr.left) {
      parent = curr;
      curr = curr.left;
      return this.remove(value, parent, curr);
    } else if (value > curr.value && curr.right) {
      parent = curr;
      curr = curr.right;
      return this.remove(value, parent, curr);
      // remove the node
    } else if (value === curr.value) {
      // no children
      if (!curr.left && !curr.right) {
        this.removeLeaf(curr, parent);
        // one child
      } else if (!curr.left) {
        if (this.root.value === curr.value) {
          this.root = parent.right;
        } else {
          parent.right = curr.right;
        }
      } else if (!curr.right) {
        if (this.root.value === curr.value) {
          this.root = curr.left;
        }
        parent.right = curr.left;
        // remove node with two children
      } else {
        // detach the left child branch
        // temp pointer to left child branch root
        const temp = curr.left;
        let tempParent = curr.right;
        // move the nodes right child branch up to replace it
        if (curr.value > parent.value) {
          if (this.root.value === curr.value) {
            this.root = curr.right;
          } else {
            parent.right = curr.right;
          }
        } else if (curr.value < parent.value) {
          if ((this.root.value = curr.value)) {
            this.root.left = curr.right;
          } else {
            parent.left = curr.right;
          }
        }
        // traverse left branch of current root
        while (tempParent) {
          // reattach the old left child branch after iterating through the new left branch
          if (temp.value < tempParent.value) {
            if (tempParent.left) {
              tempParent = tempParent.left;
            } else {
              tempParent.left = temp;
              break;
            }
          }
        }
      }
      return curr.value;
    }
  }

  /**
   * @method dfs
   * @param {int} value
   * @returns {int}
   * @description
   * Depth first search - traverses the binary tree starting at the
   * and following a single branch as far possible and repeating
   * for all branches until the node is found in n time where n is the height of the tree
   */

  dfs(value) {
    // traverse down the tree
    let curr = this.root;

    while (curr) {
      if (value < curr.value) {
        curr = curr.left;
      } else if (value > curr.value) {
        curr = curr.right;
      } else if (value === curr.value) {
        return true;
      }
    }
    return false;
  }

  /**
   * @method bfs
   * @description searches a bst breadth first
   * queue
   */
  bfs() {
    let bfsPrint = "";
    const queue = [this.root];
    while (queue.length) {
      const currNode = queue.shift();
      bfsPrint += currNode.value + " ";
      if (currNode.left) queue.push(currNode.left);
      if (currNode.right) queue.push(currNode.right);
    }
    return bfsPrint;
  }

  /**
   * @method reverse
   * @description reverses a bst in O(n) time
   */
  reverse() {}
}

const bst = new BinarySearchTree();

const vals = [4, 3, 5, 7, 2];

vals.forEach((val) => bst.add(val));
// console.log(bst.root);
// console.log(bst.remove(5));
// console.log(bst.root);

console.log(bst.bfs());
