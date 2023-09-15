const arr=[50,40,30,20]
console.log(arr)

for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]>arr[j]){
            temp=arr[i]
            arr[i]=arr[j]
            arr[j]=temp
        }
    }
}
console.log(arr)