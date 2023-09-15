function MergeSort(arr){

    if(arr.length<2){
        return arr
    }
    const mid=Math.floor(arr.length/2)
    const leftArr=arr.slice(0,mid)
    const rightArr=arr.slice(mid)
    return merge(MergeSort(leftArr),MergeSort(rightArr))

}
function merge(leftArr,rightArr){
    const sortedArr=[]
    while(leftArr.length&&rightArr.length){
        if(leftArr[0]<=rightArr[0]){
            sortedArr.push(leftArr.shift())
        }else{
            sortedArr.push(rightArr.shift())
        }
    }
    return [...sortedArr,...leftArr,...rightArr]

}

console.log(MergeSort([-3,-4,-5,34,34,555,66,334,23,23,5,4,1,45]))



// const arr=[43,54,56,32,867,343,55]
// let mid=Math.floor(arr.length/2)
// console.log(arr.slice(mid))
