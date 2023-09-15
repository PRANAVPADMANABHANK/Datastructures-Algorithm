// function bubble(arr) {
//   let swapped;
//   do {
//     swapped = false;
//     for (i = 0; i < arr.length; i++) {
//       if (arr[i] > arr[i + 1]) {
//         temp = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = temp;

//         swapped = true;
//       }
//     }
//   } while (swapped==true);

//   return arr;
// }
// console.log(bubble([-7, -9, 90, 67, 49, 56]));

// function Insertion(arr){

//     for(i=1; i<arr.length;i++){
//         let value=arr[i]
//         let j=i-1
//         while(j>=0&&arr[j]>value){
//             arr[j+1]=arr[j]
//             j--
//         }
//         arr[j+1]=value
//     }
//     return arr

// }
// console.log(Insertion([-4,-6,45,-7,45,32,76,8,43534,787,2342,34546,7877867867]));

// function quick(arr){
//     if(arr.length<2){
//         return arr
//     }

//     let pivot=arr[arr.length-1]
//     let left=[]
//     let right=[]
//     for(i=0;i<arr.length-1;i++){
//         if(arr[i]<pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return [...quick(left),pivot,...quick(right)]

// }
// console.log(quick([8,7,5,0,897,343,6576,-435,-5]));

// class Stack{
//     constructor(){
//         this.items=[]
//     }
//     push(element){
//         this.items.push(element)
//     }
//     display(){
//         console.log(this.items)
//     }
// }
// const stack=new Stack()
// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.push(40)
// stack.push(50)
// stack.display()

// class Stack{
//     constructor(){
//         this.items=[]
//     }
//     push(elements){
//         this.items.push(elements)
//     }
//     pop(){
//         this.items.pop()
//     }
//     peek(){
//         return this.items[this.items.length-1]
//     }
//     isempty(){
//         return this.items.length===0
//     }
//     size(){
//         return this.items.length
//     }
//     display(){
//         console.log(this.items);
//     }
// }
// const stack=new Stack()

// stack.push(12)
// stack.push(23)
// stack.push(34)
// stack.push(45)
// stack.pop()
// stack.pop()
// stack.pop()
// stack.push(67)
// stack.push(567)

// stack.display()
// console.log(stack.peek())
// console.log(stack.size())
// console.log(stack.isempty())

// class Queue{
//     constructor(){
//         this.items=[]
//     }
//     Enqueue(elements){
//         this.items.push(elements)
//     }
//     Dequeue(){
//         this.items.shift()
//     }
//     display(){
//         console.log(this.items)
//     }
// }
// const queue=new Queue()
// queue.Enqueue(10)
// queue.Enqueue(20)
// queue.Enqueue(30)
// queue.Enqueue(40)
// queue.Enqueue(66)
// queue.Enqueue(7687)
// queue.Enqueue(6667)

// queue.display()

// class Queue{
//     constructor(){
//         this.items={}
//         this.rear=0
//         this.front=0
//     }
//     enqueue(element){
//         this.items[this.rear]=element
//         this.rear++
//     }
//     dequeue(){
//         const item=this.items[this.front]
//         delete this.items[this.front]
//         this.front++
//     }
//     display(){
//         console.log(this.items)
//     }

// }
// const queue=new Queue()
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.enqueue(40)
// queue.enqueue(50)
// queue.dequeue()
// queue.display()

// function bubbleSort(arr) {
//   let swapped;
//   let temp

//   do {
//     swapped = false;
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] > arr[i + 1]) {
//         temp = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = temp;
//         swapped = true;
//       }
//     }
//   } while (swapped);
//   return arr;
// }

// console.log(bubbleSort([59, -3, -67, 45, 67]));


// function quickSort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     let pivot=arr[arr.length-1]
//     let left=[]
//     let right=[]
//     for(i=0;i<arr.length-1;i++){
//         if(arr[i]<pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)]

// }
// console.log(quickSort([30,55,-1,6,9]))

// function mergeSort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     const mid=Math.floor(arr.length/2)
//     const leftArr=arr.slice(0,mid)
//     const rightArr=arr.slice(mid)
//     return merge(mergeSort(leftArr),mergeSort(rightArr))
// }

// function merge(leftArr,rightArr){
// const sortedArr=[]
// while(leftArr.length&&rightArr.length){
//     if(leftArr[0]<=rightArr[0]){
//         sortedArr.push(leftArr.shift ())
//     }else{
//         sortedArr.push(rightArr.shift())
//     }

// }
// return [...sortedArr,...leftArr,...rightArr]

// }
// console.log(mergeSort([30,40,22,3,1,87,9,0,99]))


// 





// function Quicksort(arr){

// if(arr.length<2){
//     return arr
// }
// const pivot=arr[arr.length-1]
// const left=[]
// const right=[]
// for(i=0;i<arr.length-1;i++){
//     if(arr[i]<pivot){
//         left.push(arr[i])
//     }else{
//         right.push(arr[i])
//     }
// }
// return [...Quicksort(left),pivot,...Quicksort(right)]


// }
// console.log(Quicksort([39,96,9,60,-33,-8]))






// class Node{
//     constructor(data){
//         this.value=data
//         this.next=null
//     }
// }
// class Stack{
//     constructor(){
//         this.top=null
//         this.length=0
//     }
//     push(data){
//         const newNode=new Node(data)
//         if(!this.length){
//             this.top=newNode
//         }else{
//             const holdPointer=this.top
//             this.top=newNode
//             newNode.next=holdPointer
//         }
//         this.length++
//     }
//     pop(){
//          const newTop=this.top.next
//          this.top=newTop
//          this.length--
//     }
//     display(){
//         console.log(this.top)
//     }
// }
// const stack=new Stack()

// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.push(40)
// stack.pop()
// stack.pop()
// stack.pop()
// stack.display()


// class Node{
//     constructor(data){
//         this.value=data
//         this.next=null
//     }
// }
// class Stack{
//     constructor(){
//         this.top=null
//         this.length=0
//     }
//     push(data){
//         const newNode=new Node(data)
//         if(!this.length){
//             this.top=newNode
//         }else{
//             const holdPointer=this.top
//             this.top=newNode
//             newNode.next=holdPointer
//         }
//         this.length++
//     }
//     pop(){
//         const newTop=this.top.next
//         this.top=newTop
//         this.length--
//     }
//     display(){
//         console.log(this.top)
//     }
// }
// const stack=new Stack()
// stack.push(10)
// stack.push(40)
// stack.pop()


// stack.display()






































