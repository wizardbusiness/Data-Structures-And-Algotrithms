
// edges between nodes
const edges = [
  ['i', 'j'], // connection between i and j
  ['k', 'i'],
  ['m', 'k'],
  ['j', 'k'],
  ['k', 'l'],
  ['o', 'n'],
]; 

// convert to adjacency list
// cyclic graph, since connections are biderectional between nodes
const graph = {
  i: ["j", "k"],
  j: ["i", "k"],
  k: ["i", "j", "l", "m"],
  l: ["k"],
  m: ["k"],
  n: ["o"],
  o: ["n"],
}

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

// undirectedPath - check if there is a path between two nodes in a cyclic undirected graph
// time o(e) where e is edges space o(n) where n is nodes

const builtGraph = buildGraph(edges);

const undirectedPath = (graph, src, dest, visited=new Set()) => {
  if (src === dest) return true;
  if (!(src in graph)) return false
  if (visited.has(src)) return false;
  
  for (let neighbor of graph[src]) {
    visited.add(src);
    if(undirectedPath(graph, neighbor, dest, visited) === true) return true;
  }
  
  return false;
}

// better to do with depth first, but just for kicks
const undirectedPathI = (graph, src, dest) => {
  if (!(src in graph)) return false;

  const visited = new Set();
  
  const queue = [ src ];

  while (queue.length > 0) {
    const curr = queue.shift();
    visited.add(curr);
    if (curr === dest) return true;
    for (let neighbor of graph[curr]) {
      if (!visited.has(neighbor)) queue.push(neighbor);
    }
  }

  return false;
}

console.log(undirectedPath(graph, "i", "k"));
console.log(undirectedPathI(graph, "i", "k"));


