class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class LinkedList{
    constructor(value){
        const newNode=new Node(value)
        this.head=newNode
        this.tail=newNode
        this.length=0
    }
    unshift(value){
        const newNode=new Node(value)
        if(!this.length){
            this.head=newNode
            this.tail=newNode
        }else{
            newNode.next=this.head
            this.head=newNode
        }
        this.length++
        return this
    }
    pop(){
        let prev=this.head
        let temp=this.head
        if(!this.length){
            return undefined
        }
        while(temp.next){
            prev=temp
            temp=temp.next
        }
        prev.next=null
        this.tail=prev
    }
    shift(){
        let temp=this.head
        if(!this.length){
            return undefined
        }else if(this.length==1){
            this.head=null
            this.tail=null
        }else{
            this.head=temp.next
            temp.next=null
           
        }
        this.length--
        return temp
    }
    reverse(){
        if(!this.length){
            return undefined
        }else if(this.length==1){
            return this
        }
        let prev=null
        let temp=this.head
        let next=temp.next
        this.head=this.tail
        this.tail=temp
        for(let i=0;i<this.length;i++){
            next=temp.next
            temp.next=prev
            prev=temp
            temp=next
        }
        return this
    }
    duplicate(){
        let current=this.head
        while(current!=null&&current.next!=null){
            if(current.value===current.next.next){
                current.next=current.next.next
                this.length--
            }else{
                current=current.next
            }
        }
        
    }
    decimal(){
        let ans=0
        let current=this.head
        while(current){
            ans=(ans*2)+current.value
            current=current.next
        }
        console.log(ans)
    }

    display(){
        let current=this.head
        while(current){
            console.log(current.value);
            current=current.next
        }
    }


}
const ll=new LinkedList()

ll.unshift(10)
ll.unshift(10)
ll.unshift(30)
ll.shift()
ll.shift()

ll.duplicate()


ll.display()


