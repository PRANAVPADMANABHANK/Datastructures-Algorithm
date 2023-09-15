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

}

const ll=new singlyLinkedList()

const arr=[15,20,30,40,55]

arr.forEach(value=>{
    ll.push(value)
})



console.log(ll);

// for(let i=0;i<arr.length;i++){
//     ll.push(arr[i])
// }
// console.log(ll);