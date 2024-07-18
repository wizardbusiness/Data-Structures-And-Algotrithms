class binaryNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// manual binary tree

const a = new binaryNode(4);
const b = new binaryNode(10);
const c = new binaryNode(3);
const d = new binaryNode(2);
const e = new binaryNode(1);
const f = new binaryNode(9);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;


// breadth first
const treeSum = (root) => {
  if (!root) return 0;
  const queue = [ root ];
  let sum = 0;
  while(queue.length > 0) {
    const current = queue.shift();
    sum += current.val;
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return sum;
}

const treeSumDepth = (root) => {
  if (!root) return 0;
  return root.val + treeSumDepth(root.left) + treeSumDepth(root.right);
}

console.log(treeSum(a))
console.log(treeSumDepth(a))