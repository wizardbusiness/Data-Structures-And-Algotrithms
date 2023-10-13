class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
    this.count = 1;
  }
}

class BST {
  constructor(value) {
    this.root = new Node(value);
  }

  /**
   * add
   * @param {number} value
   */

  add(value) {
    let currNode = this.root;
    while (currNode) {
      if (value < currNode.value) {
        if (currNode.left === null) {
          currNode.left = new Node(value);
          return;
        } else {
          currNode = currNode.left;
        }
      } else if (value > currNode.value) {
        if (currNode.right === null) {
          currNode.right = new Node(value);
          return;
        } else {
          currNode = currNode.right;
        }
      } else if (value === currNode.value) {
        currNode.count++;
        return;
      }
    }
  }

  /**
   * remove
   * @param {number} value
   */

  /**find
   * @param {number} value
   */

  find(value) {
    let currNode = this.root;
    while (currNode) {
      if (currNode.value === value)
        return { value: currNode.value, count: currNode.count };
      else if (value < currNode.value) {
        currNode = currNode.left;
      } else if (value > currNode.value) {
        currNode = currNode.right;
      }
    }
    return -1;
  }

  remove(val) {
    // find node
    let parent = this.root;
    let currNode = this.root;
    while (currNode) {
      if (val < currNode.value) {
        parent = currNode;
        currNode = currNode.left;
      } else if (val > currNode.value) {
        parent = currNode;
        currNode = currNode.right;
      } else if (val === currNode.value) {
        // if at bottom of tree
        if (currNode.right === null && currNode.left === null) {
          // point parent to null
          parent = null;
          return this.root;
          // if left side
        } else if (currNode.left && currNode.right) {
          const left = currNode.left;
          let right = currNode.right;
          while (right) {
            if (left.value < right.value) {
              if (right.left === null) {
                right.left = left;
                parent = right;
                return this.root;
              } else {
                right = right.left;
              }
            } else if (left.value > right.value) {
              if (right.right === null) {
                right.right = left;
                parent = right;
                return this.root;
              } else {
                right = right.right;
              }
            }
          }
        }
      }
    }

    return -1;
  }
}

const bst = new BST(8);

bst.add(4);
bst.add(9);

// bst.remove(9);

console.log(bst);

console.log(bst);
