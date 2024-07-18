/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 *
 * Strategy: DFS: traverse tree recursively with helper function.
 * Let low and high lead recursion simultaneously.
 * Gotchas: No returns, no else statements
 * Add all nodes with values between low and high inclusive to total
 */

const rangeSumBST = (root, low, high) => {
  let totalSum = 0;

  /**
   * @function DFS
   * @param {TreeNode} node -  BST TreeNode
   * @return {void}
   */
  const dfs = (node) => {
    // base
    if (!node) return;
    // add vals in range
    if (node.val >= low && node.val <= high) {
      totalSum += node.val;
    }
    if (low < node.val) {
      dfs(node.left);
    }
    if (high > node.val) {
      dfs(node.right);
    }
  };

  dfs(root);
  return totalSum;
};
