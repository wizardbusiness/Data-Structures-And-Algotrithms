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
  let minSize = Infinity;

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      const size = exploreSize(grid, r, c, visited)
      if (size > 0) {
        minSize = Math.min(size, minSize)
      }
    }
  }

  return minSize;
}

const exploreSize = (grid, r, c, visited) => {
  const rowInBounds = 0 <= r && r < grid.length;
  const colInBounds = 0 <= c && c < grid[0].length;

  if (!rowInBounds || !colInBounds) return 0;

  if (visited.has(r + ',' + c)) return 0;
  visited.add(r + ',' + c);

  if (grid[r][c] === "W") return 0;

  let count = 1;

  count += exploreSize(grid, r - 1, c, visited);
  count += exploreSize(grid, r + 1, c, visited);
  count += exploreSize(grid, r, c - 1, visited);
  count += exploreSize(grid, r, c + 1, visited);
  return count; 
}

console.log(minimumIsland(grid));
