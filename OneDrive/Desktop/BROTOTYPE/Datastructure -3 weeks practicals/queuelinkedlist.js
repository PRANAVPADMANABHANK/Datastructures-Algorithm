class Node{
    constructor(data){
        this.value=data
        this.next=null
    }
}
class Queue{
    constructor(){
        this.first=null
        this.last=null
        this.length=0
    }
    enqueue(data){
        const newNode=new Node(data)
        if(!this.length){
            this.first=newNode
            this.last=newNode
            this.length++
        }else{
             this.last.next=newNode
             this.last=newNode
             this.length++
        }
        
    }
    dequeue(){
        this.first=this.first.next
        this.length--
    }
    display(){
        console.log(this.first)
        
    }
}
const queue=new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.dequeue()



queue.display()