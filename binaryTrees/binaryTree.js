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
