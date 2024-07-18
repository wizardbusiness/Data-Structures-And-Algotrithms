// find the sum of the max path from root to leaf

class binaryNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// manual binary tree

const a = new binaryNode(5);
const b = new binaryNode(11);
const c = new binaryNode(3);
const d = new binaryNode(4);
const e = new binaryNode(2);
const f = new binaryNode(32);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;

const maxPathSum = (root) => {
  if (!root) return -Infinity
  if (!root.left && !root.right) return root.value;
  const left = maxPathSum(root.left);
  const right = maxPathSum(root.right);

  const maxChildValue = Math.max(left, right);

  return root.value + maxChildValue;
}

console.log(maxPathSum(a));