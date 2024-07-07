const gridTraveler = (m, n, cache={}) => {
  const key = m + ',' + n;
  if (key in cache) return cache[key];
  if (m === 0 || n === 0) return 0;
  if (m === 1 || n === 1) return 1;


  const right = gridTraveler(m - 1, n, cache);
  const down = gridTraveler(m, n - 1, cache);

  cache[key] = right + down
  return right + down;
}


// unmemoized O(2 ^ n + m)
// memoized O(n + m) -> 3
console.log(gridTraveler(3, 3)); // -> 3
console.log(gridTraveler(18, 18)); // -> 3