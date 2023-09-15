class Node{
    constructor(value){
        this.value=value
        this.next=null

    }
}

class singlyLinkedList{
    constructor(value){
        const newNode=new Node(value)
        this.head=newNode
        this.tail=newNode
        this.length=1
    }


    pop(){

let temp=this.head
let prev=this.head

        if(!this.length){
            return undefined
        }

        while(temp.next){
            prev=temp
            temp=temp.next
        }
        prev.next=null
        this.tail=prev

        if(this.length==0){
            this.head=null
            this.tail=null

        }

    }
}
