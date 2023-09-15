class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    // Get the index of the parent of the node at index i.
    parent(i) {
      return Math.floor((i - 1) / 2);
    }
  
    // Get the index of the left child of the node at index i.
    leftChild(i) {
      return 2 * i + 1;
    }
  
    // Get the index of the right child of the node at index i.
    rightChild(i) {
      return 2 * i + 2;
    }
  
    // Swap the values at two indices in the heap array.
    swap(i, j) {
      [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
  
    // Add a value to the heap and maintain the heap property.
    add(value) {
      // Add the value to the end of the heap.
      this.heap.push(value);
  
      // Get the index of the value.
      let index = this.heap.length - 1;
  
      // Maintain the heap property by swapping with parent while value is smaller.
      while (index > 0 && this.heap[index] < this.heap[this.parent(index)]) {
        this.swap(index, this.parent(index));
        index = this.parent(index);
      }
    }
  
    // Remove and return the minimum value in the heap and maintain the heap property.
    removeMin() {
      if (this.heap.length === 0) {
        return null;
      }
  
      // Get the minimum value at the root of the heap.
      const min = this.heap[0];
  
      // Move the last value in the heap to the root and remove it from the end.
      this.heap[0] = this.heap[this.heap.length - 1];
      this.heap.pop();
  
      // Maintain the heap property by swapping with child while value is larger.
      let index = 0;
      while (this.leftChild(index) < this.heap.length) {
        const smallerChildIndex =
          this.rightChild(index) < this.heap.length && this.heap[this.rightChild(index)] < this.heap[this.leftChild(index)]
            ? this.rightChild(index)
            : this.leftChild(index);
  
        if (this.heap[index] < this.heap[smallerChildIndex]) {
          break;
        }
  
        this.swap(index, smallerChildIndex);
        index = smallerChildIndex;
      }
  
      return min;
    }
  
    // Get the minimum value in the heap without removing it.
    getMin() {
      if (this.heap.length === 0) {
        return null;
      }
  
      return this.heap[0];
    }
    display(){
        return this.heap
    }
  }
const min=new MinHeap()
min.add(10)  
min.add(2)
min.add(4)
min.removeMin()
min.removeMin()


console.log(min.display())