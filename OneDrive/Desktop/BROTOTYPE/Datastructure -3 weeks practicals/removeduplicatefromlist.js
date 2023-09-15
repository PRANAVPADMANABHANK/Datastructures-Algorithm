class Node{
    constructor(value) {
        this.value=value
        this.next=null
    }
}
class singlyLinkedList{
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
            this.tail=newNode
        }
        this.length++
        return this
    }
    duplicate(){
        let current=this.head

        while(current!=null && current.next!=null){
            if(current.value===current.next.value){
                current.next=current.next.next
            }else{
                current=current.next
            }
            
        }
        this.length--
        
    }


    display(){
        let current=this.head
        while(current){
            console.log(current.value)
            current=current.next
        }
    }

}

const ll=new singlyLinkedList()


ll.push(10)
ll.push(20)
ll.push(20)
ll.push(30)
ll.push(30)
ll.push(40)
ll.push(50)
ll.push(50) 
ll.duplicate()
ll.display()

