const arr=[800,87,90,7,65,5,7,8,12]

let value=7
let index

for(i=0;i<arr.length;i++){
    if(arr[i]==value){
        index=i
    }
}
console.log("the index position is :"+ index);