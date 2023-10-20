class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
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
  /**
   * remove
   * @param {number} value
   * @param {node} root
   * @param {node} parent
   */
  remove(val, root=this.root, parent=this.root, left=false) {
    // base case 
    // if node is null return null
    if (root === null) return root;
    // find node
    if (val < root.value) this.remove(val, root.left, root, true);
    else if (val > root.value) this.remove(val, root.right, root, false);
    else if (val === root.value) {
      // remove leaf
      if (root.right === null && root.left === null) {
        if (left === true) parent.left = null;
        else if (left === false) parent.right = null;
        // remove node with one child
      } else if (root.right === null || root.left === null) {
        // assign child to parent
        // removes node since node is no longer assigned address
        if (root.left === null) {
          parent.right = root.right;
        } else if (root.right === null) {
          parent.left = root.left;
        } 
      // remove intermediate node
      } else {
        // save left branch
        let  leftBranchRoot = root.left;
        // move right branch up
        let rightBranchRoot = root.right;
        // if traversing left of parent, plug into parent left
        if (left === true) {
          parent.left = rightBranchRoot;
          // if traversing right of parent, plug into parent right
        } else if (left === false) {
          parent.right = rightBranchRoot;
        };
        // iterate through left of new local root node until you're at the bottom
        while (rightBranchRoot) {
          if (rightBranchRoot.left === null) {
            rightBranchRoot.left = leftBranchRoot;
            return;
          }
          else {
            rightBranchRoot = rightBranchRoot.left;
          };
        };
      };  
    };
    
  }
}

const nodeVals = [18, 17, 19, 30, 34, 33, 35, 1, 3, 4, 28, 27, 29, 14];

const bst = new BST(20);

nodeVals.forEach(val => {
  bst.add(val);
});
bst.remove(30);
console.dir(bst, {depth: null});



