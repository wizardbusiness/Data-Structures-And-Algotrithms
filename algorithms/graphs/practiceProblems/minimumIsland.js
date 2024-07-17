const grid = [
  ['W', 'L', 'W', 'W', 'L', 'W'],
  ['L', 'L', 'W', 'W', 'L', 'W'],
  ['W', 'L', 'W', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'L', 'W'],
  ['W', 'W', 'W', 'L', 'L', 'W'],
  ['W', 'W', 'W', 'L', 'W', 'W'],
];

const minimumIsland = (grid) => {
  const visited = new Set();
  let minimum = Infinity; 
 
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      console.log(minimum);
      const islandSize = exploreIsland(grid, r, c, visited);
      if (islandSize > 0) {
        minimum = Math.min(minimum, islandSize);
      }
    }
  }

  return minimum
}

const exploreIsland = (grid, r, c, visited) => {
  const rowInBounds = r >= 0 && r < grid.length;
  const colInBounds = c >= 0 && c < grid[0].length;
  const tile = r + "," + c;
  if (visited.has(tile)) return 0;
  visited.add(tile);
  if (!rowInBounds || !colInBounds) return 0;
  if (grid[r][c] === "W") return 0;
  
  let count = 1;

  // left
  count += exploreIsland(grid, r, c - 1, visited);
  // right
  count += exploreIsland(grid, r, c + 1, visited);
  // up
  count += exploreIsland(grid, r - 1, c, visited);
  // down
  count += exploreIsland(grid, r + 1, c, visited);
  console.log(count)
  return count;

}

console.log(minimumIsland(grid));
