// check if you can traverse from the source to the destination node of an acyclic graph

// const graph = {
//   f: ['g', 'i'],
//   g: ['h'],
//   h: [],
//   i: ['k'],
//   j: ['i'],
//   k: [],
// }

const graph = {
  a: ['g', 'b'],
  g: ['c'],
  b: ['g'],
  g: [],
  x: ['y'],
  y: ['z'],
  z: [],
}

/**
 * 
 * @param {object} graph 
 * @param {keyof graph} src 
 * @param {keyof graph} dest 
 * @returns 
 */

// iterative acyclic graph
const hasPath = (graph, src, dest) => {
  const queue = [ src ];
  while(queue.length > 0) {
    const curr = queue.shift();
    if (curr === dest) return true;
    for (let neighbor of graph[curr]) {
      queue.push(neighbor)
    }
  }

  return false
}

const hasPathR = (graph, src, dest) => {
  if (src === dest) return true;
  for (let neighbor of graph[src]) {
    if (hasPathR(graph, neighbor, dest) === true) return true
  }
  return false;
}

console.log(hasPath(graph, "a", "z"))

console.log(hasPathR(graph, "a", "g"))