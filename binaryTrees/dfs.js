class binaryNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/**
 *             a
 *           /  \
 *         b     c
 *       /  \   / \ 
 *     d    e  f   null
 * 
*/

const a = new binaryNode("a");
const b = new binaryNode("b");
const c = new binaryNode("c");
const d = new binaryNode("d");
const e = new binaryNode("e");
const f = new binaryNode("f")

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;

const tree = a

// depth first search
// go as far as you can down 

const dfsIterative = (src) => {
  const path = [];
  const stack = [src];
  while (stack.length > 0) {
    const currNode = stack.pop();
    path.push(currNode.value);
    if (currNode.right !== null) stack.push(currNode.right);
    if (currNode.left!== null) stack.push(currNode.left);
  }
  return path
}


const dfsRecursive = (src) => {
  if (src === null) return [];
  const left = dfsRecursive(src.left);
  const right = dfsRecursive(src.right);
  return [src.value, ...left, ...right];
}

console.log(dfsIterative(tree));
console.log(dfsRecursive(tree));