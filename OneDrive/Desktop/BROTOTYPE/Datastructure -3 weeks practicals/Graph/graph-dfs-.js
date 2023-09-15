// function bfs(graph, start){

//     let visited = new Set()
//     let stack = [start]

//     while(stack.lenght>0){
//         let current = stack.pop()
//         if(!visited.has(current)){
//             visited.add(current)
//             console.log(current)

//             let neighbor = graph[current]
//             for(i=0;i<neighbor.lenght;i++){
//                 stack.push(neighbor[i])
//             }
//         }
//     }

// }

// let graph={
//     A:['B','C'],
//     B:['A','D','E'],
//     C:['A','F'],
//     D:['B'],
//     E:['B','F'],
//     F:['C','F']
// }
// bfs(graph,'A')




function dfs(graph, start){

    let visited = new Set()
    let stack = [start]

    while(stack.length>0){
        let current= stack.pop()
        if(!visited.has(current)){
            visited.add(current)
            console.log(current)

            let neighbor = graph[current]
            for(i=0; i<neighbor.length;i++){
                stack.push(neighbor[i])
            }
        }
    }

}
let graph={

    A:['B','C'],
    B:['A','D'],
    C:['A','F'],
    D:['B'],
    E:['B','F'],
    F:['C','F']
}

dfs(graph, 'A')