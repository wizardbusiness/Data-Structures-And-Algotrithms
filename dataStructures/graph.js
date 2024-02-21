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
 * 
 */

function depthFirstSearch(graph, source) {
  console.log(source);
  for (let neighbor of graph[source]) {
    depthFirstSearch(graph, neighbor);
  }
}

depthFirstSearch(directionalGraph, "a");
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
