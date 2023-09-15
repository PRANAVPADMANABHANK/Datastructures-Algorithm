let data=[]
let currentSize=data.length

function push(newVal){
        lastremoved=data[currentSize-1]
        data[currentSize]=newVal
        currentSize++
        return lastremoved

}

function pop(){

        currentSize--
        data.length=currentSize       

}


function reversestr(item){
    for(i=0;i<item.length;i++){
        push(item[i])
    }
    for(i=0;i<item.length;i++){
        console.log(pop()) 
    }
} 

let str="pranav"

s=str.split("")
reversestr(s)

console.log("stack",data);