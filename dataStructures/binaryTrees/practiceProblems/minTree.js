// Find the minimum value in a binary tree

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
const e = new binaryNode(15);
const f = new binaryNode(12);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;

const minTree = (root) => {
  if (!root) return;
  let min = Infinity;
  const queue = [ root ];
  while (queue.length > 0) {
    const current = queue.shift();
    if (current.value < min) min = current.value;
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return min;
}

const minTreeRecur = (root) => {
  if (!root) return Infinity;
  const leftMin = minTreeRecur(root.left);
  const rightMin = minTreeRecur(root.right);
  return Math.min(root.value, leftMin, rightMin)
}

console.log(minTree(a))

console.log(minTreeRecur(a))