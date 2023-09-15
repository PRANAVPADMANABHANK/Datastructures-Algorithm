class Node{
    constructor(value){
        this.prev=null
        this.value=value
        this.next=null
    }
}
class doublyLinkedList{
    constructor(value){
        const newNode=new Node(value)
        this.head=newNode
        this.tail=newNode
        this.length=0
    }
push(value){
    const newNode=new Node(value)
    if(!this.length){
        this.head=newNode
        this.tail=newNode
    }else{
        this.tail.next=newNode
        newNode.prev=this.tail
        this.tail=newNode
    }
    this.length++
    return this
}




    display(){

        let current=this.head
        while(current){
            console.log(current.value);
            current=current.next
        }
    }
}

const dll=new doublyLinkedList()

dll.push(10)
dll.push(20)



dll.display()
