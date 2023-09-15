class Graph{
    constructor(){
        this.adjecencyList={}
    }
    addVertex(vertex){
        if(!this.adjecencyList[vertex]){
            this.adjecencyList[vertex]=new Set()
        }
    }
    addEdge(vertex1,vertex2){
        if(!this.adjecencyList[vertex1]){
            this.addVertex(vertex1)
        }if(!this.adjecencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjecencyList[vertex1].add(vertex2)
        this.adjecencyList[vertex2].add(vertex1)
    }
    bfs(start){
        
        let queue=[start]
        let result=[]
        let visited={}
        
        visited[start]=true
        
        while(queue.length){
              let current=queue.shift()
              result.push(current)
              this.adjecencyList[current].forEach(neighbor => {
                 if(!visited[neighbor]){
                     visited[neighbor]=true
                     queue.push(neighbor)
                 }
              });    
        }
        return result
    }

  display(){
    for(let vertex in this.adjecencyList){
        console.log(vertex+"-->"+[...this.adjecencyList[vertex]])
    }
  }
}

  const graph = new Graph()
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

  
console.log(graph.bfs('A'))
