class Node{
    constuctor(value){
        this.value=value
        this.next=null

    }

}
class linkedlist{
    constuctor(value){
        const newNode=new Nodeg(value)


        this.head=newNode
        this.tail=newNode 

        this.length=1
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
        

    }
}

const ll=new linkedlist()
ll.push(10)
ll.push(12)



console.log(ll);