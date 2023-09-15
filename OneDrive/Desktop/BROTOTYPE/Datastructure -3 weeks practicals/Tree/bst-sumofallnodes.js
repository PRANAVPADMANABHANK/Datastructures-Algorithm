class TreeNode {
    constructor(val, left, right) {
      this.val = val;
      this.left = left || null;
      this.right = right || null;
    }
  }
  
  function sumTree(root) {
    if (!root) {
      return 0;
    }
    return root.val + sumTree(root.left) + sumTree(root.right);
  }
  
  // Example usage
  const tree = new TreeNode(10,new TreeNode(6, new TreeNode(3), new TreeNode(7)),new TreeNode(15, null, new TreeNode(18)));
  console.log(sumTree(tree)); // Output: 58
  