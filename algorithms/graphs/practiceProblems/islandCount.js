// grid graph

const grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
];

// think about an xy position as a node


const islandCount = (grid) => {
  let count = 0;
  let visited = new Set() // keep track of visited squares
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) { // be mindful that grid may have a different number of columns than rows
      if (exploreIslands(grid, r, c, visited) === true) count += 1;
    }
  }
  return count;
}

const exploreIslands = (grid, r, c, visited) => {
  const rowInBounds = (0 <= r) && (r < grid.length);
  const columnInBounds = (0 <= c) && (c < grid[0].length);

  if (!rowInBounds || !columnInBounds) return false;

  if (visited.has(r + "," + c)) return false;
  visited.add(r + "," + c);
  
  if (grid[r][c] === "W") return false;

  exploreIslands(grid, r - 1, c, visited);
  exploreIslands(grid, r + 1, c, visited);
  exploreIslands(grid, r, c - 1, visited);
  exploreIslands(grid, r, c + 1, visited);

  return true;
}

console.log(islandCount(grid));