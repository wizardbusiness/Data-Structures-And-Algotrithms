class binaryNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// manual binary tree

const a = new binaryNode("a");
const b = new binaryNode("b");
const c = new binaryNode("c");
const d = new binaryNode("d");
const e = new binaryNode("e");
const f = new binaryNode("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;

/**
 *             a
 *           /  \
 *         b     c
 *       /  \   / \ 
 *     d    e  f   null
 * 
*/


class BinaryTree {
  constructor() {
    this.root = null;
  }


  addNode(val) {
    if (!this.root) {
      this.root = new binaryNode(val);
      return;
    };
    let currNode = this.root;
    
    while(currNode) {
      if (val < currNode.val) {
        if (!currNode.left) {
          currNode.left = new binaryNode(val);
          return;
        } else {
          currNode = currNode.left;
        }
        
      } else if (val >= currNode.val) {
        if (!currNode.right) {
          currNode.right = new binaryNode(val);
          return;
        } else {
          currNode = currNode.right;
        }
      } 
    }
  }

  // add nodes for an array of values
  addNodesForEach(array) {
    array.forEach(val => this.addNode(val)); 
  }

  // traverse the whole tree, going deeper before going laterally
  // n = # nodes
  // O(n) time complexity
  // O(n) space complexity

  depthFirstTraversal(root) {
    if (!root) return [];
    const left = this.depthFirstTraversal(root.left);
    const right = this.depthFirstTraversal(root.right);
    return [root.val, ...left, ...right];
  }
}

const bst = new BinaryTree();

bst.addNodesForEach([10, 8, 9, 7, 5, 6])

console.log(bst.root)
console.log(bst.depthFirstTraversal(bst.root));

