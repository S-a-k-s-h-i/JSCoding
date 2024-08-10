/**
 * BINARY TREE
 * At most 2 children
 * Exactly 1 root
 * Exactly 1 path between root and any node
 * Empty tree can be considered as Binary Tree
 */

/**
 * BINARY SEARCH TREE
 * left sub keys are less then the root key
 * right sub keys are greater then the root key
 * left and right sub tree must be BST
 * No duplicate
 */

class BSTNode {
    constructor(key){
        this.key = key;
        this.left= null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(key){
        const newNode = new BSTNode(key);
        if(this.root == null){
            this.root = newNode;
        }else{
            this.insertNode(this.root,newNode);
        }
    }

    insertNode(node, newNode){  //node-> root
        if(newNode.key<node.key){
            if(node.left == null){
                node.left = newNode;
            }else{
               this.insertNode(node.left,newNode)
            }
        }else{
            if(node.right == null){
                node.right = newNode;
            }else{
                this.insertNode(node.right,newNode);
            }
        }
    }
    
    //Deletion of Node in BST
    //1. Leaf Node[no children] - remove that node, make null
    //2. 1 child - put that child node in place of deleted node
    //3. 2 child - in-order successor[smallest key in right sub tree]
    //             go on checking the node.left.left the last node replace with it
    delete(key){
       this.root = this.deleteNode(this.root,key) //sub tree root node
       console.log('root-----',this.root);
    }

    deleteNode(node,key){ //node-> root
        if(node === null){
            return null;
        }
        if(key<node.key){
            node.left = this.deleteNode(node.left,key);
        }else if(key>node.key){
            node.right = this.deleteNode(node.right,key);
        }else{
            console.log('node-----------',node);
            //left node
            if(node.left===null && node.right===null){
                return null;
            }else if(node.left === null){
                return node.right;
            }else if(node.right === null){
                return node.left;
            }else{
                //2 children
                let tempNode = this.findMinNode(node.right,key);
                node.key = tempNode.key;
                node.right = this.deleteNode(node.right,key);
            }
        }
        return node;
    }

    findMinNode(node,key){
       while(node.left!==null){
           node = node.left;
       }
       return node;
    }

    search(){

    }
}

const bstTree = new BinarySearchTree();
bstTree.insert(15);
bstTree.insert(20);
bstTree.insert(9);
bstTree.insert(12);
bstTree.insert(18);
bstTree.insert(6);
bstTree.delete(6);
console.log(bstTree);