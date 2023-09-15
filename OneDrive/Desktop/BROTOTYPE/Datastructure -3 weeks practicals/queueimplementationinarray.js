
//***linear time complexity => O(n)***//



// class Queue{
//     constructor(){
//         this.items=[]
//     }
//     enqueue(element){
//         this.items.push(element)
//     }
//     dequeue(){
//         this.items.shift()
//     }
//     isEmpty(){
//         return this.items.length===0
//     }
//     peek(){
//         if(!this.isEmpty()){
//             return this.items[0]
//         }else{
//             return null
//         }
//     }
//     size(){
//         return this.items.length
//     }
//     display(){
//         console.log(this.items)
//     }


// }
// const queue=new Queue()
// queue.enqueue(10)
// queue.enqueue(30)
// queue.dequeue()
// console.log(queue.isEmpty())
// console.log(queue.size())
// console.log(queue.peek())

// queue.display()




//*** constant time complexity ***//

class Queue{
    constructor(){
        this.items={}
        this.rear=0
        this.front=0
    }
    enqueue(element){
        this.items[this.rear]=element
        this.rear++
    }
    dequeue(){
        const item=this.items[this.front]
        delete this.items[this.front]
        this.front++
    }
    display(){
        console.log(this.items)
    }
}
const queue=new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.dequeue()
queue.dequeue()
queue.display()