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
  const visited = new Set();
  let count = 0;

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (exploreIsland(grid, r, c, visited) === true) count += 1;
    }
  }

  return count;
}

const exploreIsland = (grid, r, c, visited) => {
  const coord = r + "," + c
  if (visited.has(coord)) return false;
  visited.add(coord);
  const rowInbounds = 0 <= r && r < grid.length;
  const columnInbounds = 0 <= c && c < grid[0].length; 
  if (!rowInbounds || !columnInbounds) return false;
  if (grid[r][c] === "W") return false;

  // explore left
  exploreIsland(grid, r, c - 1, visited);
  // explore right
  exploreIsland(grid, r, c + 1, visited);
  // explore up
  exploreIsland(grid, r - 1, c, visited);
  // explore down 
  exploreIsland(grid, r + 1, c, visited)

  return true;
}

console.log(islandCount(grid));
