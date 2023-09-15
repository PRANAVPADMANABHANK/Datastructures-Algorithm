class maxHeap{
    constructor(){
        this.heap=[]
    }
    insert(value){
        this.heap.push(value)
        let currentIndex=this.heap.length-1
        while(currentIndex>0 && this.heap[currentIndex]>this.heap[Math.floor((currentIndex-1)/2)]){
            [this.heap[currentIndex],this.heap[Math.floor((currentIndex-1)/2)]]=[this.heap[Math.floor((currentIndex-1)/2)],this.heap[currentIndex]]
            currentIndex=Math.floor((currentIndex-1)/2)
        }
    }
    delete(){
        if(this.heap.length===0){
            return null
        }
        if(this.heap.length===1){
            return this.heap.pop()
        }
        const max=this.heap[0]
        this.heap[0]=this.heap.pop()

        let currentIndex=0
        let leftchildIndex=(2*currentIndex)+1
        let rightChildIndex=(2*currentIndex)+2

        while((leftchildIndex<this.heap.length && this.heap[leftchildIndex]>this.heap[currentIndex]) || (rightChildIndex<this.heap.length && this.heap[rightChildIndex]>this.heap[currentIndex])){
            if(rightChildIndex>=this.heap.length || this.heap[leftchildIndex]>this.heap[rightChildIndex]){
                [this.heap[currentIndex],this.heap[leftchildIndex]]=[this.heap[leftchildIndex],this.heap[currentIndex]]
                currentIndex=leftchildIndex
            }
            else{
                [this.heap[currentIndex],this.heap[rightChildIndex]]=[this.heap[rightChildIndex],this.heap[currentIndex]]
                currentIndex=rightChildIndex
            }
            leftchildIndex=2*currentIndex+1
            rightChildIndex=2*currentIndex+2
        }
        
    }
    display(){
        return this.heap
    }

}
const max=new maxHeap()

max.insert(10)
max.insert(20)
max.insert(45)
max.delete()


console.log(max.display())






