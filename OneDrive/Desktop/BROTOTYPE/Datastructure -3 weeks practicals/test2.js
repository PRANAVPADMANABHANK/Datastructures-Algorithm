class Node{
    constructor(data){
        this.value=data
        this.next = null
    }
}
class Stack{
    constructor(){
        this.top = null
        this.length = 0 
    }
    push(data){
        const newNode = new Node(data)
        if(!this.lenght){
            this.top=newNode
        }else{
            const holdPointer = this.top
            this.top=newNode
            newNode.next=holdPointer
            
        }
        this.length++
    }
    pop(){
        const newTop=this.top.next
        this.top=newTop
        this.length--
    }
    display(){
        console.log(this.top)
    }
}
const stack = new Stack()

stack.push(10)
stack.push(20)
stack.push(30)


stack.display()
