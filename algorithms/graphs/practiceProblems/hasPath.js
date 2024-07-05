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

console.log(hasPath(graph, "a", "z"))