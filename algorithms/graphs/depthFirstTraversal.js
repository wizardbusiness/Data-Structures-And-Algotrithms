const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: []
}

// recursive
const depthFirstSearch = (graph, source) => {
  console.log(source);
  for (let neighbor of graph[source]) {
    depthFirstSearch(graph, neighbor);
  }
  
}


const depthFirstSearchIterative = (graph, source) => {
  const stack = [source];

  while (stack.length > 0) {
    const currNode = stack.pop();
    console.log(currNode);
    for (let neighbor of graph[currNode]) {
      stack.push(neighbor);
    }
  }
}
depthFirstSearch(graph, "a")
depthFirstSearchIterative(graph, "a")
