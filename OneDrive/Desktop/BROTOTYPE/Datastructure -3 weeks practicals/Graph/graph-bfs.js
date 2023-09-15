// Graph class
class Graph {
    constructor() {
      this.adjList = new Map();
    }
    
    addVertex(vertex) {
      this.adjList.set(vertex, []);
    }
    
    addEdge(vertex1, vertex2) {
      this.adjList.get(vertex1).push(vertex2);
      this.adjList.get(vertex2).push(vertex1);
    }
    
    // BFS algorithm
    bfs(startingVertex) {
      let visited = new Map();
      let queue = [];
      
      // visited.set(startingVertex, true);
      queue.push(startingVertex);
      
      while (queue.length > 0) {
        let currentVertex = queue.shift();
        console.log(currentVertex);
        
        let element = this.adjList.get(currentVertex);
        for (let neighbor of element) {
          if (!visited.get(neighbor)) {
            visited.set(neighbor, true);
            queue.push(neighbor);
          }
        }
      }
    }
  }
  
  // Example usage
  let graph = new Graph();
  graph.addVertex(100);
  graph.addVertex('A');
  graph.addVertex('B');
  graph.addVertex('C');
  graph.addVertex('D');
  graph.addVertex('E');
  graph.addVertex('F');
  graph.addVertex('G');
  graph.addEdge('A', 'B');
  graph.addEdge('A', 'D');
  graph.addEdge('B', 'C');
  graph.addEdge('B', 'E');
  graph.addEdge('C', 'F');
  graph.addEdge('D', 'E');
  graph.addEdge('E', 'F');
  graph.addEdge('E', 'G');
  
  graph.bfs('A');
  