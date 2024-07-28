const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: []
}

const graph1 = {
  a: ["b"],
  b: []
}

// depth first iterative

const dfsIterative = (graph, src) => {
  const stack = [ src ];
  while (stack.length > 0) {
    const currNode = stack.pop();
    console.log(currNode)
    for (let neighbor of graph[currNode]) {
      stack.push(neighbor)
    }
  }
}

const dfsRecursive = (graph, src, visited = new Set()) => {
  visited.add(src);
  for (let neighbor of graph[src]) {
    dfsRecursive(graph, neighbor, visited);
  }
  return [...visited];
}

dfsIterative(graph, 'a')
console.log(dfsRecursive(graph, 'a'));
