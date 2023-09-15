class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function findClosestValueInBst(tree, target) {
    return findClosestValueInBstHelper(tree, target, tree.value);
  }
  
  function findClosestValueInBstHelper(node, target, closest) {
    if (node === null) {
      return closest;
    }
    if (Math.abs(target - closest) > Math.abs(target - node.value)) {
      closest = node.value;
    }
    if (target < node.value) {
      return findClosestValueInBstHelper(node.left, target, closest);
    } else if (target > node.value) {
      return findClosestValueInBstHelper(node.right, target, closest);
    } else { 
      return closest;
    }
  }

  
  // Create a tree
const root = new Node(10);
root.left = new Node(5);
root.right = new Node(15);
root.left.left = new Node(2);
root.left.right = new Node(5);
root.right.left = new Node(13);
root.right.right = new Node(22);
root.left.left.left = new Node(1);
root.right.left.right = new Node(14);

// Find the closest value to 12
const closestValue = findClosestValueInBst(root, 12);
console.log(closestValue); // Output: 13
