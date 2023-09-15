class Node{
    constructor(){
        this.children = new Map()
        this.isEnd = false
    }
}
class Trie{
    constructor(){
        this.root = new Node()
    }
    insert(word){
        let currentNode = this.root
        for(let letter of word){
            if(!currentNode.children.has(letter)){
                currentNode.children.set(letter,new Node())
            }
            currentNode = currentNode.children.get(letter)
        }
        currentNode.isEnd = true
    }
    search(word){
        if(!word.length){
            return false
        }
        let currentNode = this.root
        for(let letter of word){
            if(!currentNode.children.has(letter)){
                return false
            }
            currentNode = currentNode.children.get(letter)
        }
        return currentNode.isEnd
    }
}
const trie = new Trie()
// trie.insert("Pranav")
trie.insert("alwin")
// console.log(trie.search("Pranav"))
console.log(trie.search("alwin"))
// trie.insert("hey")
// console.log(trie.search("hey"))
// trie.insert("angel")
// console.log(trie.search("angel"))