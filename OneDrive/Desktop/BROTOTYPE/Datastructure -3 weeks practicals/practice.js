// const arr=[10,20,30,40,50,60,70]


// let find=40
// let start=0
// let end=arr.length-1

// let position

// while(start<=end){

//     let mid=Math.floor((start+end)/2)

//     if(arr[mid]===find){
//         position=mid
//     }else if(arr[mid]<find){
//         start=mid+1
//     }else{
//         end=mid-1
//     }



// }
// console.log(position);


// // function reverse(){
// // let str="malayala"
// // let newStr=''

// // for(let i=str.length-1;i>=0;i--){
// //     newStr+=str[i]
// // }
// // if(newStr==str){
// //     console.log(str+" is palindrome")
// // }else{
// //     console.log(str+" is not palindrome")
// // }



// // }
// // reverse()


// function binarySearch(arr,target){

// let start=0
// let end=arr.length-1

// while(start<=end){
//     let mid=Math.floor((start+end)/2)

//     if(target===arr[mid]){
//         return mid
//     }else if(target<arr[mid]){
//         end=mid-1
//     }else{
//         start=mid+1
//     }

    
// }


// }

// console.log(binarySearch([-2,-1,0,1,2],-1));


//***reverse of a number***//


// let n=123
// let sum=0
// let r

// while(n>0){
    
    
    
// // r=n%10
// // sum=sum*10+r
// // n=Math.floor(n/10)

// // }
// // console.log(sum);



// //***reverse of a number***//




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
        this.lenght=0
    }
push(value){
    const newNode=new Node(value)
    if(!this.lenght){
        this.head=newNode
        this.tail=newNode
    }else{
        this.tail.next=newNode
        this.tail=newNode
    }
    this.lenght++
    return this
}
unshift(value){
const newNode=new Node(value)

if(!this.lenght){
    this.head=newNode
    this.tail=newNode
}else{
    newNode.next=this.head
    this.head=newNode
}
this.lenght++
return this

}
pop(){

    if(!this.head){
        return undefined
    }
    let prev=this.head
    let temp=this.head
    while(temp.next){
        prev=temp
        temp=temp.next
    }
    prev.next=null
    this.tail=prev
    if(this.lenght==0){
        this.head=null
        this.tail=null
    }
    this.lenght--
    return temp
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
ll.unshift(20)
ll.unshift(30)


ll.shift()

ll.display()





