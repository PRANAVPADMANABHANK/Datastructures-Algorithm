class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}
class BST{
    constructor(){
        this.root = null
    }
    isEmpty(){
        return  this.root===null
    }
    insert(value){
        const newNode = new Node(value)
        if(this.isEmpty()){
            this.root = newNode
        }else{
            this.insertNode(this.root, newNode)
        }
    }
    insertNode(root, newNode){
        if(newNode.value<root.value){
            if(root.left===null){
                root.left =newNode
            }else{
                this.insertNode(root.left,newNode)
            }
        }else{
            if(root.right===null){
                root.right=newNode
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }
    delete(value){
        this.root  = this.deleteNode(this.root, value)
    }
    deleteNode(root,value){
        if(!root.value){
            return null
        }
        if(value< root.value){
            root.left = this.deleteNode(root.left, value)
        }else if(value>root.value){
            root.right=this.deleteNode(root.right, value)
        }else{
            if(!root.left && !root.right){
                return null
            }
            if(!root.left){
                return root.right
            }else if(!root.right){
                return root.left
            }
            root.value=this.min(root.right)
            root.right=this.deleteNode(root.right,root.value)
        }
        return root
    }
    search(root, value){
        if(!root){
            return false
        }else{
            if(value===root.value){
                return true
            }
            else if(value<root.value){
                return this.search(root.left,value)
            }
            else{
                return this.search (root.right,value)
            }
        }
    }
    max(root){
        if(!root.right){
            return root.value
        }else{
            return this.max(root.right)
        }
    }
    min(root){
        if(!root.left){
            return root.value
        }else{
            return this.min(root.left)
        }
    }
    preOrder(root){
        if(root){
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    isValidBST(root){

        let min= -Infinity
        let max = Infinity
        if(!root){
            return null
        }
        if(root.value<=min || root.value>max){
            return false
        }
        return this.isValidBST(root.left, min, root.value)&&this.isValidBST(root.right, root.value, max)

    }
}
const bst = new BST()

bst.insert(5)
bst.insert(1)
bst.insert(4)
bst.insert(3)
bst.insert(6)

bst.preOrder(bst.root)
console.log(bst.isValidBST(bst.root))