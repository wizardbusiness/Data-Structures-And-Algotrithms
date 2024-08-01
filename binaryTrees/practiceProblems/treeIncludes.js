// return boolean for if a binary tree includes a node with the target value.

class binaryNode {
  constructor(value) {
    this.value = value;
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

const treeIncludesIterativeDFS = (root, value) => {
  const stack = [ root ];

  while (stack.length > 0) {
    const currNode = stack.pop();
    if (currNode.value === value) return true;
    const left = currNode.left;
    const right = currNode.right;
    if (left) stack.push(left);
    if (right) stack.push(right);
  }

  return false
}

const treeIncludesBFS = (root, value) => {
  const queue = [ root ];

  while (queue.length > 0) {
    const currNode = queue.shift();
    console.log(currNode.value)
    if (currNode.value === value) return true;
    const left = currNode.left;
    const right = currNode.right;
    if (left) queue.push(left);
    if (right) queue.push(right);
  }

  return false;
}

const treeIncludesDFS = (root, value) => {
  if (root === null) return false;
  if (root.value === value) return true;
  const left = treeIncludesDFS(root.left, value);
  const right = treeIncludesDFS(root.right, value);
  if (left === true || right === true) return true;
  return false;
}

