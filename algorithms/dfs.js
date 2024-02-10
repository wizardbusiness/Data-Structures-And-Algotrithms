const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

/**
 * directional graph dfs
 * stack, where the stack is either explicit or recursive call stack
 * goes as far as possible in one direction before switching to the next possible path
 */

/**
 * @function recursiveDFS
 * @param {graph} directionalGraph
 * @param {string} source - source node key
 * @description recursive depth first search that uses the call stack as a stack to discover and print nodes
 */

function recursiveDFS(graph, source) {
  console.log(source);

  for (let neighbor of graph[source]) {
    recursiveDFS(graph, neighbor);
  }
}

recursiveDFS(graph, "a");

/**
 * @function iterativeDFS
 * @param {graph} directionalGraph
 * @param {string} source - source node key
 * @description iterative depth first print that uses a stack to discover and print nodes depth first
 */

const iterativeDFS = (graph, source) => {
  // stack
  const stack = [source];

  while (stack.length > 0) {
    const currNode = stack.pop();
    console.log(currNode);
    for (let neighbor of graph[currNode]) {
      stack.push(neighbor);
    }
  }
};
iterativeDFS(graph, "a");
