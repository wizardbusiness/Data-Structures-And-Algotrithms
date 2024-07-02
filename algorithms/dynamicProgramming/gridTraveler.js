const gridTraveler = (m, n, cache={}) => {
  const key = m + ',' + n;
  if (key in cache) return cache[key]
  // if 0 x n grid there will be 0 ways to travel
  if (m === 0 || n === 0) return 0;
  // if 1 x n grid there will be one way to travel the grid
  if (m === 1 && n === 1) return 1;
  
  // always two options
  // down and right
  // down reduces number of rows by 1 
  
  const down = gridTraveler(m - 1, n, cache);
  // right reduces number of columns by 1
  const right = gridTraveler(m, n - 1, cache);
  cache[key] = down + right;
  return cache[key];
}

console.log(gridTraveler(2, 3)); // -> 3
console.log(gridTraveler(2, 3));; // -> 3
console.log(gridTraveler(18, 18)); // -> 3