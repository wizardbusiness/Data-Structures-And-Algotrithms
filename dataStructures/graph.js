const directionalGraph = {
  a: ["b", "c"], // neighbors to a node
  b: ["d"],
  c: ["e"],
  d: ["f"], // show nodes with no neighbors
  e: [],
  f: [],
};

/**
 * depth first traversal
 * go as far as possible in one direction as possible.
 * then choose a new direction.
 * structure: stack
 */

const depthFirst = (graph, startNode, print = "") => {
  const currNode = startNode;
  const neighbors = graph[currNode];
  neighbors.forEach((node) => {
    console.log(node);
    depthFirst(graph, node);
  });
  return print;
};

depthFirst(directionalGraph, "a");

/**
 * breadth first traversal
 * explore all neighbors of a node before searching additional nodes.
 * structure: queue
 */

/**
 * Iterative approach
 * @param {*} graph
 * @param {*} startNode
 */
// const depthFirstTraverse = (graph, startNode) => {
//   // stack
//   let printedNodes = "";
//   const stack = [startNode];
//   while (stack.length) {
//     // pop off the current node
//     let currNode = stack.pop();
//     // examine its neighbors and push them onto the stack.
//     const neighbors = graph[currNode];
//     neighbors.forEach((neighbor) => {
//       stack.push(neighbor);
//     });

//     stack.length === 0
//       ? (printedNodes += `${currNode}`)
//       : (printedNodes += `${currNode} --> `);
//   }

//   return printedNodes;
//   // pick starting node.
//   // push starting node onto stack.
//   // pop it off, then push its neighbors to the stack.
//   // order they are pushed is arbitrary and doesn't matter.
//   // pop off top of stack, and push its neighbors onto the stack.
// };

// const depthFirstPrint = depthFirstTraverse(directionalGraph, "a");
// console.log(depthFirstPrint);

// const breadthFirstTraversal = (graph, startNode) => {
//   let printedNodes = "";
//   // queue
//   const queue = [startNode];
//   while (queue.length) {
//     const currNode = queue.shift();
//     const neighbors = graph[currNode];
//     neighbors.forEach((neighbor) => {
//       queue.push(neighbor);
//     });
//     queue.length === 0
//       ? (printedNodes += `${currNode}`)
//       : (printedNodes += `${currNode} --> `);
//   }

//   return printedNodes;
// };

// const breadthFirstPrint = breadthFirstTraversal(directionalGraph, "a");
// console.log(breadthFirstPrint);
