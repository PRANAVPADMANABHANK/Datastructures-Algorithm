function selectionSort(arr){


for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]>arr[j]){
            temp=arr[i]
            arr[i]=arr[j]
            arr[j]=temp
        }
    }
}
return arr

}

console.log(selectionSort([76,-98,50,765,3]))