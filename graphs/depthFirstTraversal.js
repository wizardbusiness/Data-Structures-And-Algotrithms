const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: []
}

// depth first iterative

const depthFirstI = (graph, src) => {
  const stack = [ src ];
  const path = [];
  while (stack.length > 0) {
    const curr = stack.pop();
    path.push(curr);
    for (let neighbor of graph[curr]) {
      stack.push(neighbor);
    }
  }
  return path;
}

console.log(depthFirstI(graph, "a"))

const depthFirstR = (graph, src) => {
  let path = [ src ];
  for (let neighbor of graph[src]) {
    path = [...path, ...depthFirstR(graph, neighbor)];
  }
  return path;
};

console.log(depthFirstR(graph, "a"));
