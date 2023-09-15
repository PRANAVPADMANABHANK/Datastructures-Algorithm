function heapify(arr,length,parentIndex){

    let largest = parentIndex
    let left = 2*parentIndex+1
    let right = 2*parentIndex+2

    if(left<length && arr[left]>arr[largest]){
        largest=left
    } 
    if(right<length && arr[right]>arr[largest]){
        largest=right
    }
    if(largest!=parentIndex){
        [arr[parentIndex],arr[largest]]=[arr[largest],arr[parentIndex]]
        heapify(arr,length,largest)

    }
    return arr


}


function heapSort(arr){

    let length=arr.length
    let lastParentNode = Math.floor(length/2-1)
    let lastchild = length-1

    while(lastParentNode>=0){
        heapify(arr,length,lastParentNode)
        lastParentNode--
    }
    while(lastchild>=0){
        [arr[0],arr[lastchild]]=[arr[lastchild],arr[0]]
        heapify(arr,lastchild,0)
        lastchild--
    }
    return arr


} 

console.log(heapSort([78,97,5,4,3,9]))