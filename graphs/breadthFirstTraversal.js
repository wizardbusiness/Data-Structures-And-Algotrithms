graph = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: []
}

const breadthFirstTraversal = (graph, source) => {
  const queue = [source];

  while(queue.length > 0) {
    const currNode = queue.shift();
    console.log(currNode);
    for (let neighbor of graph[currNode]) {
      queue.push(neighbor);
    }
  } 
}

breadthFirstTraversal(graph, "a")


const stack = [0];
console.log(stack.length == true)