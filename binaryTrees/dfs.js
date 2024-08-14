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

const depthFirstSearch = (src) => {
  const order = [];
  const stack = [ src ];
  while(stack.length > 0) {
    const currNode = stack.pop();
    order.push(currNode.value)
    const l = currNode.left;
    const r = currNode.right;
    if (r !== null) stack.push(r)
    if (l !== null) stack.push(l)
  }

  return order;
} 

console.log(depthFirstSearch(tree));