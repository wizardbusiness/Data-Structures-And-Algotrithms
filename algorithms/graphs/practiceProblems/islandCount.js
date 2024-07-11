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
  const tile = r + "," + c;
  if (visited.has(tile)) return false;
  visited.add(tile);
  const rowInBound = r >= 0 && r < grid.length;
  const colInBound = c >= 0 && c < grid[0].length;
  if (!rowInBound || !colInBound) return false;
  if (grid[r][c] === "W") return false;
  // explore left
  exploreIsland(grid, r, c - 1, visited); 
  // explore right
  exploreIsland(grid, r, c + 1, visited);
  // explore up
  exploreIsland(grid, r - 1, c, visited);
  // explore down
  exploreIsland(grid, r + 1, c, visited);

  return true;
};

console.log(islandCount(grid));
