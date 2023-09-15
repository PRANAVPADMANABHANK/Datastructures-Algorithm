let arr=[6,4,8,3,0,9,7,10]

let highest=0
let secondhighest=0

for(let i=0;i<arr.length;i++){
    if(arr[i]>highest){
        secondhighest=highest
        highest=arr[i]
        
    }
}
console.log(highest);
console.log(secondhighest)