// 

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

// time o(e) where e is edges space o(n) where n is nodes

const makeGraphFromEdges = (edges) => {
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

// iterative dft
const undirectedPath1 = (edges, start='i', end='n') => {
  const graph = makeGraphFromEdges(edges);
  const visited = { [start]: true }

  const stack = [start];

  while(stack.length > 0) {
    const currNode = stack.pop();

    if (currNode === end) return true;
    for (let neighbor of graph[currNode]) {
      if (!visited[neighbor]) stack.push(neighbor);
      visited[neighbor] = true;
    }
  }
  return false;
}

console.log(undirectedPath1(edges, "i", "m"))

const undirectedPath2 = (graph, start, end, visited={}) => {
  if (start === end) return true;
  if (visited[start]) return false;
  visited[start] = true;
  for (let neighbor of graph[start]) {
    if (undirectedPath2(graph, neighbor, end, visited) === true) {
      return true;
    }
    
  }

  
  return false;
}

console.log(undirectedPath2(graph, "i", "o"))