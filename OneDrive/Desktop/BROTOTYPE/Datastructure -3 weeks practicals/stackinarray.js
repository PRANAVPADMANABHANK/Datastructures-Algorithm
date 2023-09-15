class Stack{
    constructor(){
        this.items=[]
    }
    push(element){
        this.items.push(element)
    }
    pop(){
        return this.items.pop()
    }
    peek(){
        return this.items[this.items.length-1]
    }
    isEmpty(){
        return this.items.length===0 
    }
    size(){
        return this.items.length
    }
    print(){
        console.log(this.items);
    }



}
const stack=new Stack()
console.log(stack.isEmpty())
stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.print()
console.log(stack.peek())
console.log(stack.size())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.size())
stack.print()
console.log(stack.isEmpty())
stack.print()
console.log(stack.size())
console.log(stack.peek())
console.log(stack.isEmpty())
