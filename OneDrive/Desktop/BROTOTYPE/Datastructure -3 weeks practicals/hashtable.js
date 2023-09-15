class hashTable{
    constructor(size){
        this.table=new Array(size)
        this.size=size
    }
    hash(key){
        let total=0
        for(let i=0;i<key.size;i++){
            total=total+key.charCodeAt(i)
        }
        return total%this.size
    }
    set(key,value){
        const index=this.hash(key)
        this.table[index]=value
    }
    get(key){
        const index=this. hash(key)
        return this.table[index]
    }
    remove(key){
        const index=this.hash(key)
        this.table[index]=undefined
    }
    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i])
            }
        }
    }

}
const table=new hashTable(50)
table.set("name","bruce")
// table.set("age",25)
// table.set("age",19)


table.display()

console.log(table.get("name"))
// table.set("mane","clark")
// table.display()