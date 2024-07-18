/**
 * @function longestSubstring
 * @param {string} string
 * @returns {number} longest substring
 */

function longestSubstring(string) {
  let max = 0;

  const createSubstrings = (string) => {
    if (string.length === 0) return;
    const hash = {};
    let localMax = 0;

    for (let i = 0; i < string.length; i++) {
      if (string[i] in hash) break;
      hash[string[i]] = true;
      localMax++;
      max = Math.max(max, localMax);
    }
    const newString = string.slice(1);

    createSubstrings(newString);
  };
  createSubstrings(string);
  return max;
}

console.log(longestSubstring("pwwkew"));
