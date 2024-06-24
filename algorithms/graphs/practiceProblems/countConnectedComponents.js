const graph = {
  1: [2],
  2: [1],
  3: [],
  4: [6],
  5: [6],
  6: [4, 5, 7, 8],
  7: [6], 
  8: [6],
}

const traverseComponent = (graph, src, visited) => {
  if (visited.has(Number(src))) return false; // make SURE that you aren't creating different data types in your set.
  visited.add(Number(src))
  for (let neighbor of graph[src]) {
    traverseComponent(graph, neighbor, visited);
  }

  return true;
}

const countConnectedComponents = (graph) => {
  let count = 0
  const visited = new Set()
  for (let node in graph) {
    const traversedComponent = traverseComponent(graph, node, visited);
    if (traversedComponent) count += 1
  }
  return count;
}

console.log(countConnectedComponents(graph));