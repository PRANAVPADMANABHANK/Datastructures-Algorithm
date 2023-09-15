class Node{
    constructor(){
        this.children= new Map()
        this.isEnd= false
    }
}
class Trie{
    constructor(){
        this.root = new Node()
    }
    insert(word){
        let currentNode=this.root
        for(let letter of word){
            if(!currentNode.children.has(letter)){
                currentNode.children.set(letter,new Node())
            }
            currentNode=currentNode.children.get(letter)
        }
        currentNode.isEnd=true
    }
}
const trie = new Trie()

trie.insert("hello")
trie.insert("hey")
