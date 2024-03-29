
const heights = [ 1, 23, 52, 20, 19, 2, 9, 33 ]
/**
  * 
  * Code
  *
  *  11. Container With Most Water
  *
  *  You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
  *
  *  Find two lines that together with the x-axis form a container, such that the container contains the most water.
  *
  *  Return the maximum amount of water a container can store.
  *
  *  Notice that you may not slant the container.
*/

/**
 * @param {number[]} height
 * @return {number}
 */

// Each index is worth 1
// The lower container line dictates the height
// Three sides: element a, element b, distance between them. 
// Keep track of index of a and index of b to get distance

// take the max of the products of (min of two max heights * max of width)
function containerWithMostWater(heights) {
  let maxMax; 
  let currMax;

  let i = 0;
  let j = heights.length - 1;
  while (i < j) {
    const height = Math.min(heights[i], heights[j]);
    const width = j - i;
    currMax = height * width;
    maxMax = Math.max(maxMax, currMax) || 0
    // move the smaller side in since smaller dictates the height of the container
    if (heights[i] < heights[j]) {
      i++;
    } else {
      j--;
    }
  }

  return maxMax;
}

console.log(containerWithMostWater(heights))