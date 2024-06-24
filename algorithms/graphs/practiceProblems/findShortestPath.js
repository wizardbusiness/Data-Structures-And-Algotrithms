const edges = [
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v'],
]

const buildGraph = (edges) => {
  const graph = {};
  for (let edge of edges) {
    const [a, b] = edge;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }

  return graph;
}

const graph = buildGraph(edges);


// breadth first is better
const findShortestPath = (graph, nodeA, nodeB) => {
  const queue = [ [nodeA, 0 ] ]; // [ current node, edge length ]
  const visited = new Set();


  while (queue.length > 0) {
    const [ node, distance ] = queue.shift();
    if (node === nodeB) return distance;
    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(node);
        queue.push([neighbor, distance + 1])
      };
    }
  }
  return -1  
}