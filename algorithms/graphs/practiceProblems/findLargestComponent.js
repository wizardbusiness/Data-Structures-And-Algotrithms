const graph = {
  0: [1, 5, 8],
  1: [0],
  2: [4, 3],
  3: [4, 2],
  4: [2, 3],
  5: [0, 8],
  8: [0, 5],
}

const explore = (graph, src, visited) => {
  if (visited.has(Number(src))) return 0;
  let size = 1;
  visited.add(Number(src));
  
  for (let neighbor of graph[src]) {
    size += explore(graph, neighbor, visited)
  }

  return size;
}

const findLargestComponent = (graph) => {
  const visited = new Set();
  let maxComponent = 0;
  for (let node in graph) {

    maxComponent = Math.max(maxComponent, explore(graph, node, visited))
  }

  return maxComponent;
}

console.log(findLargestComponent(graph));