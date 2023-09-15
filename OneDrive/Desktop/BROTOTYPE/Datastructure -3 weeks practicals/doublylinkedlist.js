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

pop(){

    let temp=this.tail
    if(!this.length){
        return undefined
    }else if(this.length==1){
        this.head=null
        this.tail=null
    }else{
        temp.prev.next=null
        this.tail=temp.prev
        temp.prev=null
    }
    this.length--
    return temp
} 

unshift(value){
    
const newNode=new Node(value)
    if(!this.length){
        this.head=newNode
        this.tail=newNode

    }else{
        newNode.next=this.head
        this.head.prev=newNode
        this.head=newNode
    }
    this.length++
    return this
}
shift(){

    let temp=this.head
    if(!this.length){
        return undefined
    }else if(this.length==1){
        this.head=null
        this.tail=null

    }else{
        temp.next.prev=null
        this.head=temp.next
        temp.next=null


    }
    this.length--
    return temp

}

}

const dll=new doublyLinkedList()
// dll.push(2)
// dll.push(3)
// dll.push(4) 
// dll.push(5)
// dll.push(6)
// dll.pop()
// dll.pop()
// dll.unshift(-1)
// dll.shift()
// dll.shift()
// dll.shift()

console.log(dll);


