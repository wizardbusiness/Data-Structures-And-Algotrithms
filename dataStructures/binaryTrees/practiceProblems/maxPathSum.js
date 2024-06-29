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
const f = new binaryNode(31);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;

const maxPathSum = (root) => {
  if (!root) return 0;
  const left = maxPathSum(root.left);
  const right = maxPathSum(root.right);
  const max = Math.max(left, right);
  return root.value + max;
}

console.log(maxPathSum(a))