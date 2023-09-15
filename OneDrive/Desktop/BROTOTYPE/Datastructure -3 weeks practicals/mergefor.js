const arr1=[10,20,30,40,50]
const arr2=[60,70,80,90]
const arr3=[]


for(i=0;i<arr1.length;i++){
    arr3[i]=arr1[i]
}
for(i=0;i<arr2.length;i++){
    arr3[arr1.length+i]=arr2[i]
}

console.log(arr3);