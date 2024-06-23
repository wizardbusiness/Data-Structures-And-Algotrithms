// check if you can traverse from the source to the destination node of an acyclic graph

const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['k'],
  j: ['i'],
  k: [],
}

/**
 * 
 * @param {object} graph 
 * @param {keyof graph} src 
 * @param {keyof graph} dest 
 * @returns 
 */

// iterative
const hasPath1 = (graph, src, dest) => {
  const stack = [src];

  while (stack.length > 0) {
    const currNode = stack.pop();
    if (currNode === dest) return true;
    for (let neighbor of graph[currNode]) {
      stack.push(neighbor)
    }
  }
  return false;
}

console.log(hasPath1(graph, "g", "h"))

// recursive

/**
 * 
 * @param {object} graph
 * @param {keyof graph} src 
 * @param {key of graph} dest 
 * @returns {boolean}
 */
const hasPath2 = (graph, src, dest) => {
  if (src === dest) return true;
  for (let neighbor of graph[src]) {
    if (hasPath2(graph, neighbor, dest) === true) return true
  }
  return false
}

console.log(hasPath2(graph, "f", "h"))

// iterative breadth first
const hasPath3 = (graph, src, dest) => {
  const queue = [src];

  while(queue.length > 0) {
    const currNode = queue.shift();
    if (currNode === dest) return true;
    for (let neighbor of graph[currNode]) {
      queue.push(graph[neighbor]);
    }
  }

  return false;
}