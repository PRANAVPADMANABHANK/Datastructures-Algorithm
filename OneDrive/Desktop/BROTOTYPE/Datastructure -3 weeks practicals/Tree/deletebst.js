class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}
class BinarySearchTree{
    constructor(){
        this.root=null
    }
    isEmpty(){
        return this.root===null
    }
    insert(value){
        const newNode=new Node(value)
        if(this.isEmpty()){
            this.root=newNode
        }else{
            this.insertNode(this.root,newNode)
        }
    }
    insertNode(root,newNode){
        if(newNode.value<root.value){
            if(root.left===null){
                root.left=newNode
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
   
    min(root){
        if(!root.left){
            return root.value
        }else{
            return this.min(root.left)
        }
    }
    inorder(root){
        if(root){
            this.inorder(root.left)
            console.log(root.value)
            this.inorder(root.right)
        }
    }
    levelOrder(){
        const queue=[]
        queue.push(this.root)
        while(queue.length){
            let curr=queue.shift()
            console.log(curr.value)
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }    
        }
    }
    delete(value){
        this.root=this.deleteNode(this.root,value)
    }
    deleteNode(root,value){
        if (root===null){
            return null

        }
        if(value<root.value){
            root.left=this.deleteNode(root.left,value)
        }else if(value>root.value){
            root.right=this.deleteNode(root.right,value)
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
   
}
const bst=new BinarySearchTree()

bst.insert(25);
 bst.insert(15);
  bst.insert(50);
  bst.insert(10);
  bst.insert(22);
  bst.insert(35);
  bst.insert(70);
  bst.insert(4);
  bst.insert(12);
  bst.insert(18);
  bst.insert(24);
  bst.insert(31);
  bst.insert(44);
  bst.insert(66);
  bst.insert(90);
  bst.delete(90)

bst.inorder(bst.root)




// console.log(bst.isEmpty());

