
class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class linkedlist{
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
decimal(){
    let current=this.head
    let ans=0

    while(current!=null){
        ans=(ans*2)+current.value
        current=current.next
    }
    console.log("binary to decimal is  "+ans)
}

display(){
    let current=this.head
    while(current){
        console.log(current.value);
        current = current.next
    }
}

}
const ll=new linkedlist()
ll.push(1)
ll.push(0)
ll.push(1)
ll.push(1)



ll.display()
ll.decimal()

