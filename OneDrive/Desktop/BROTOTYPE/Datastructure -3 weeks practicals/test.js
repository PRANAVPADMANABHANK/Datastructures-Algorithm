// class Node{
//     constructor(value){
//         this.prev=null
//         this.value=value
//         this.next=null
//     }
// }
// class doublyLinkedList {
//   constructor(value) {
//     const newNode = new Node(value);
//     this.head = newNode;
//     this.tail = newNode;
//     this.length = 0;
//   }

//   push(value) {
//     const newNode = new Node(value);
//     if (!this.length) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       this.tail.next = newNode;
//       newNode.prev = this.tail;
//       this.tail = newNode;
//     }

//     this.length++;
//     return this;
//   }

//   pop() {
//     let temp = this.tail;

//     if (!this.length) {

//       return undefined;
//     } else if (this.length == 1) {
//       this.head = null;
//       this.tail = null;
//     } else {
//       temp.prev.next = null;
//       this.tail = temp.prev;
//       temp.prev = null;
//     }
//     this.length--;
//     return temp;
//   }

//   unshift(value) {
//     const newNode = new Node(value);
//     if (!this.length) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       newNode.next = this.head
//       this.head.prev=newNode
//       this.head=newNode
//     }
//     this.length++
//     return this
//   }
//   display(){

// let current=this.head
// while(current){
//   console.log(current.value)
//   current=current.next
// }

//   }
  
// }

// const dll=new doublyLinkedList()
// dll.push(1)
// dll.push(2)




// dll.display()



// let b=[]
// let flag=0


// function confirm(a){
//   for(let i=0;i<a.length;i++){
//     b.push(a[i])
  
  
//   }
//   flag++

//   if(flag==2){
//     return 
//   }else{
//     confirm()
//   }
// }

// let a=[1,2,3]
// console.log(confirm(a))


// let arr=[1,2,3]
// let arr2=arr
// let result=arr2.concat(arr)
// console.log(result);

let arr=[1,2,3]
let result=[...arr,...arr]
console.log(result);
