class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class singlyLinkedList {
  constructor(value) {
    const newNode = new Node(value);

    this.head = newNode;
    this.tail = newNode;

    this.length = 0;
  }

  push(value) {
    //time complexity=O(1)
    const newNode = new Node(value);

    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
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

    if(this.length==0){
      this.head=null
      this.tail=null
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
       
       this.head=temp.next
       temp.next=null


    }
    this.length--
    return temp
  }

  get(index){
    if(index<0||index>=this.length){
      return undefined
    }
    if(index==0){
      return this.head
    }
    if(index==this.length-1){
      return this.tail
    }
    let temp=this.head
    for(let i=0;i<index;i++){
      temp=temp.next
    }
    return temp
  }
  set(index,value){
    let temp=this.get(index)
    if(!temp){
      return false
    }else{
      temp.value=value
      return true
    }
  }
  insert(index,value){
     if(index<0||index>this.length){
      return undefined
     }
     if(index==0){
      this.unshift(value)
      return true
     }
     if(index==this.length){
      this.push(value)
      return true
     } 
     const newNode=new Node(value)

     let prev=this.get(index-1)
     let next=prev.next
     prev.next=newNode
     newNode.next=next

     this.length++
     return true
  }
  remove(index){
    if(index<0||index>this.length){
      return undefined
    }
    if(index==0){
     return this.shift()
    }
    if(index==this.length-1){
      return this.pop()
    }
    let temp
    let prev=this.get(index-1)
    temp=prev.next
    prev.next=temp.next
    temp.next=null

this.length--
return temp
  }
  reverse(){
    if(!this.length){
      return undefined
    }
    if(this.length==1){
      return this
    }
    else{
      let temp=this.head
      this.head=this.tail
      this.tail=temp

      let prev=null
      let next=temp.next

      for(let i=0;i<this.length;i++){
        next=temp.next
        temp.next=prev
        prev=temp
        temp=next
       }
      return this
       
    }
  }

  display(){
    let current=this.head
    while(current){
      console.log(current.value)
      current =current.next
    }
  }




}



const ll=new singlyLinkedList()
 

ll.push(10)
ll.push(20)
ll.push(30)

ll.shift()
ll.reverse()
ll.display()
