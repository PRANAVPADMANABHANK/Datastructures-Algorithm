class Graph{
    constructor(){
        this.adjecencyList={}
    }
    addvertex(vertex){
        if(!this.adjecencyList[vertex]){
            this.adjecencyList[vertex]=new Set()
        }   
    }
    addEdge(vertex1,vertex2){
        if(!this.adjecencyList[vertex1]){
            this.addvertex(vertex1)
        }
        if(!this.adjecencyList[vertex2]){
            this.addvertex(vertex2)
        }
        this.adjecencyList[vertex1].add(vertex2)
        this.adjecencyList[vertex2].add(vertex1)
    }
    hasEdge(vertex1,vertex2){
        return (
            this.adjecencyList[vertex1].has(vertex2) &&
            this.adjecencyList[vertex2].has(vertex1)
        )
    }
    display(){
        for(let vertex in this.adjecencyList){
            console.log(vertex+"-->"+[...this.adjecencyList[vertex]])
        }
    }
}
const graph=new Graph()
graph.addvertex(100)
graph.addvertex('B')
graph.addvertex('C')
graph.addEdge('A','B')
graph.addEdge('B','C')
graph.addEdge('C','A')
graph.addEdge('C','B')
graph.addEdge('C','C')
graph.addEdge('C','D')

graph.display()

console.log(graph.hasEdge('B','C'))
console.log(graph.hasEdge('A','B'))
