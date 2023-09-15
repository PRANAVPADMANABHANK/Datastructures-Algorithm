const arr=[10,20,30,40,50]

let index=2

for(i=index;i<arr.length;i++){
    arr[i]=arr[i+1]
}
arr.length--

console.log(arr);