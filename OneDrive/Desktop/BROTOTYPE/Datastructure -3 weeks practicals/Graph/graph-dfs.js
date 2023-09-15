// // Initialize graph
// const graph = {
//     'A': ['B', 'C'],
//     'B': ['A', 'D', 'E'],
//     'C': ['A', 'F'],
//     'D': ['B'],
//     'E': ['B', 'F'],
//     'F': ['C', 'E']
//   };
  
//   // Recursive implementation of DFS
//   function dfs(graph, node, visited = new Set()) {
//     // Mark current node as visited
//     visited.add(node);
  
//     console.log(node); // Print the current node
  
//     // Visit all neighbors of current node
//     for (const neighbor of graph[node]) {
//       if (!visited.has(neighbor)) {
//         dfs(graph, neighbor, visited);
//       }
//     }
//   }
  
//   // Run DFS starting from node 'A'
//   dfs(graph, 'B');
  



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
  
  // DFS algorithm
  dfs(startingVertex) {
    let visited = new Map();
    this._dfsHelper(startingVertex, visited);
  }
  
  _dfsHelper(vertex, visited) {
    visited.set(vertex, true);
    console.log(vertex);
    
    let neighbors = this.adjList.get(vertex);
    for (let neighbor of neighbors) {
      if (!visited.get(neighbor)) {
        this._dfsHelper(neighbor, visited);
      }
    }
  }
}

// Example usage
let graph = new Graph();
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

graph.dfs('A');
