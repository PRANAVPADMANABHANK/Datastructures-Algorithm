class MaxHeap {
    constructor() {
      // Initialize an empty array to store the elements of the heap
      this.heap = [];
    }
    
    // Insert an element into the heap
    insert(value) {
      // Add the new element to the end of the heap
      this.heap.push(value);
      
      // Get the index of the new element
      let currentIndex = this.heap.length - 1;
      
      // Repeat until the new element is the root of the heap or its parent is greater than the new element
      while (currentIndex > 0 && this.heap[currentIndex] > this.heap[Math.floor((currentIndex - 1) / 2)]) {
        // Swap the new element with its parent
        [this.heap[currentIndex], this.heap[Math.floor((currentIndex - 1) / 2)]] = [this.heap[Math.floor((currentIndex - 1) / 2)], this.heap[currentIndex]];
        
        // Update the index of the new element to be its parent's index
        currentIndex = Math.floor((currentIndex - 1) / 2);
      }
      
      // Return the updated heap
      return this.heap;
    }
    
    // Delete the maximum element from the heap
    deleteMax() {
      // If the heap is empty, return null
      if (this.heap.length === 0) {
        return null;
      }
      
      // If the heap has only one element, remove it and return it
      if (this.heap.length === 1) {
        return this.heap.pop();
      }
      
      // Save the maximum element and remove it from the heap
      const max = this.heap[0];
      this.heap[0] = this.heap.pop();
      
      // Get the index of the current node and its children
      let currentIndex = 0;
      let leftChildIndex = 2 * currentIndex + 1;
      let rightChildIndex = 2 * currentIndex + 2;
      
      // Repeat until the current node is a leaf or both children are smaller than the current node
      while ((leftChildIndex < this.heap.length && this.heap[leftChildIndex] > this.heap[currentIndex]) || (rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[currentIndex])) {
        // If the left child is larger than the right child, swap the current node with the left child
        if (rightChildIndex >= this.heap.length || this.heap[leftChildIndex] > this.heap[rightChildIndex]) {
          [this.heap[currentIndex], this.heap[leftChildIndex]] = [this.heap[leftChildIndex], this.heap[currentIndex]];
          currentIndex = leftChildIndex;
        }
        // Otherwise, swap the current node with the right child
        else {
          [this.heap[currentIndex], this.heap[rightChildIndex]] = [this.heap[rightChildIndex], this.heap[currentIndex]];
          currentIndex = rightChildIndex;
        }
        
        // Update the indices of the current node and its children
        leftChildIndex = 2 * currentIndex + 1;
        rightChildIndex = 2 * currentIndex + 2;
      }
      
      // Return the maximum element that was removed from the heap
      return max;
    }
    
    // Get the maximum element of the heap without removing it
    peek() {
      return this.heap.length > 0 ? this.heap[0] : null;
    }
    
    // Get the size of the heap
    size() {
      return this.heap.length;
    }
    
    // Check if the heap is empty
    isEmpty() {
      return this.heap.length === 0;
    }
    getList = () => this.heap;
  }

  
  const max=new MaxHeap()

  max.insert(10)
  max.insert(20)
  max.insert(30)
  max.insert(90)
  max.insert(92)
  console.log(max.getList())
  console.log(max.isEmpty())
  console.log(max.size())