const directionalGraph = {
  a: ["b", "c"], // neighbors to a node
  b: ["g"],
  c: ["d"],
  d: ["e"], // show nodes with no neighbor
  e: [],
  f: [],
  g: ["f"],
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
    depthFirstSearch(graph, neighbor)
  }
}

// depthFirstSearch(directionalGraph, "a");
/**
 * breadth first traversal
 * explore all neighbors of a node before searching additional nodes.
 * structure: queue
 */

/**
 * Iterative approach
 * @param {*} graph
 * @param {*} source
 */

const BFS = (graph, source) => {
  const queue = [source]; 
  while(queue.length) {
    const currNode = queue.shift();
    console.log(currNode)
    for (let neighbor of graph[currNode]) {
      queue.push(neighbor);
    }
  }
}

BFS(directionalGraph, "a")
