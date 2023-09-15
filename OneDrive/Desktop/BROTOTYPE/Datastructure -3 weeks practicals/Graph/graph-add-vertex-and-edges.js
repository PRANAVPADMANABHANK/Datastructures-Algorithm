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
    }
}
const graph=new Graph()
graph.addvertex(100)
// graph.addvertex()
// graph.addvertex('C')
// graph.addEdge('A','B')

