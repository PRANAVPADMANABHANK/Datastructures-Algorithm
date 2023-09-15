const arr=[10,20,30,40,50]

let value=100
let index=2

for(i=arr.length-1;i>=0;i--){
    if(i>=index){
        arr[i+1]=arr[i]
        if(i==index){
            arr[i]=value
        }
    }
}

console.log(arr)