// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

/**
 * E.S.T.C.V.F
 *
 * Examples
 * - Ask clarifying questions, come up with examples
 * Solutions
 * - Come up with solutions in plain english before writing down any code
 * - Is this acceptable? KEY
 * Test
 * - write test cases, base, edge cases
 *  * Diagram
 * - diagram out the solution
 * Code
 * - write the code
 * Verify
 * - Run through your code using your test cases and check for mistakes and issues
 * Fuck Yea!
 * - Celebrate that you just did all that rigmarole and solved the problem!
 */

/**
 * @function twoSum
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]}
 */

/**
 * Tests
 * empty array
 * []
 * target found
 * [1, 2, 6, 4, 0] 5 => [0, 3]
 * target not found
 * [0, 1, 4] 6 => -1
 * multiple of same integer
 * [0, 0, 2, 2, 3, 3] 5
 */

// hash what you need, check if you have what you need
function twoSum(array, target) {
  const memo = {};
  for (let i = 0; i < array.length; i++) {
    memo[array[i]] = i;
    if ((target - array[i]) in memo) return [memo[target - array[i]], i]
  }
  return [];
}

console.log(twoSum([2, 2, 6, 4, 0], 13));
