
const graph = {
  "a": ["b", "d"],
  "b": ["c", "e"],
  "c": ["f"],
  "d": ["g"],
  "e": ["d"],
  "f": ["e"],
  "g": []
};


// iterative
const depthFirstSearch = (graph, source) => {
  const stack = [source];

  while(stack.length > 0) {
    const currNode = stack.pop();
    console.log(currNode)
    for (let neighbor of graph[currNode]) {
      stack.push(neighbor);
    }
  }
}

depthFirstSearch(graph, "a");