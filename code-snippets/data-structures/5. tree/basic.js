// https://www.geeksforgeeks.org/binary-tree-data-structure/
/**
 * https://www.geeksforgeeks.org/insertion-in-a-binary-tree-in-level-order/
 * https://www.geeksforgeeks.org/level-order-tree-traversal/
 * https://www.geeksforgeeks.org/check-symmetric-binary-tree-iterative-approach/
 * https://www.geeksforgeeks.org/symmetric-tree-tree-which-is-mirror-image-of-itself/
 */

class Node {
  constructor(val = null, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class LLNode {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(val) {
    const node = new LLNode(val);

    if (!this.head) {
      this.head = node;
      return this;
    }

    let curr = this.head;
    while(curr.next != null) {
      curr = curr.next;
    }
    curr.next = node;
    
    return this;
  }


  removeHead() {
    if (this.head === null) {
      return null;
    }

    const node = this.head;
    this.head = this.head.next;
    return node;
  }

  isEmpty() {
    return !this.head;
  }
}

class Queue {
  constructor() { this.list = new LinkedList(); }

  enqueue(val) {
    return this.list.append(val);
  }

  dequeue() {
    return this.list.removeHead();
  }

  isEmpty() {
    return this.list.isEmpty();
  }
}

class QueueUsingArr {
  constructor() {
    this.arr = [];
  }

  enqueue(val) {
    this.arr.push(val);
  }
  dequeue() {
    if (this.isEmpty()) { return; }
    return this.arr.shift();
  }
  isEmpty() {
    return this.arr.length === 0;
  }
  get length() {
    return this.arr.length;
  }
}

class BinaryTree {
  constructor(val) {
    if (val instanceof Node) { this.root = val; }
    else if (val != null) { this.root = new Node(val)}
    else { this.root = null; }
  }

  inorder(node) {
    
    if (node === null) { return; }

    this.inorder(node.left);
    console.log(node.val);
    this.inorder(node.right);
  }

  preorder(node) {
    if (node === null) { return; }

    console.log(node.val);
    this.preorder(node.left);
    this.preorder(node.right);
  }

  postorder(node) {
    if (node === null) { return; }

    this.postorder(node.left);
    this.postorder(node.right);
    console.log(node.val);
  }

  insert(val) {
    const node = new Node(val);
    if (!this.root) { this.root = node; return; }
    const q = new Queue();
    q.enqueue(this.root);
    while(!q.isEmpty()) {
      const temp = q.dequeue();
      if (temp.val.left === null) {
        temp.val.left = node;
        break;
      } else {
        q.enqueue(temp.val.left);
      }

      if (temp.val.right === null) {
        temp.val.right = node;
        break;
      } else {
        q.enqueue(temp.val.right)
      }
    }
  }

  height(node) {
    if (node === null) { return 0; }
    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);

    if (leftHeight < rightHeight) {
      return rightHeight + 1;
    } else {
      return leftHeight + 1;
    }
  }

  printGivenLevel(node, level, arr = {}) {
    if (node == null) {return;}
    if (level == 1) console.log(node.val)
    else if (level > 1) {
      this.printGivenLevel(node.left, level-1);
      this.printGivenLevel(node.right, level-1);
    }
  }
  levelWiseTraversing(node = this.root) {
    const n = this.height(node);

    for (let i = 1; i <= n; i++) {
      this.printGivenLevel(node, i)
    }
  }

  __DONOTUSE___isSymmetric() {
   
    const q = new QueueUsingArr();
    q.push([this.root.left,this.root.right]);
    const next = new QueueUsingArr();
    loop(q);
    function loop(temp = []) {
      if (temp.length === 0) { return; }
      if (temp.length == 1) { return true; }
      if (temp.length % 2 != 0) { return false; }


      const n = temp.length;
      for(let i = 0; i < n; i++) {
        if (temp[i] != temp[n-1-i]) { return false;}
      }

      for (let i = 0; i < n; i++) {
        const el = temp.dequeue();
        if (el.left) next.enqueue(el.left);
        if (el.right) next.enqueue(el.right);
      }

      if (temp.isEmpty()) {
        loop() 
      }

      return true;
    }
    loop(q);
  }

  isSymmetric() {
    return this.isMirror(this.root, this.root);
  }

  isMirror(node1, node2) {
    if (node1 ===null && node2 === null) return true;

    if (node1 != null && node2 != null && node1.val === node2.val) {
      return this.isMirror(node1.left, node2.right) && this.isMirror(node1.right, node2.left);
    }

    return false;
  }

  // check if tree is symmetrical
}

function init() {
  const bt = new BinaryTree();
  bt.root = new Node(1);
  bt.root.left = new Node(2);
  bt.root.right = new Node(3);
  bt.root.left.left = new Node(4);
  console.log('====inorder=====')
  bt.inorder(bt.root);
  // console.log('====preorder=====')
  // bt.preorder(bt.root);
  // console.log('====postorder=====')
  // bt.postorder(bt.root);

  console.log('====inserting5====');
  bt.insert(5);

  console.log('====inorder after inserting 5=====')
  bt.inorder(bt.root);

  console.log('====height====')
  console.log(bt.height(bt.root));

  console.log('====inserting more====')
  bt.insert(6);
  bt.insert(7);
  bt.insert(8);
  
  console.log('====New height====');
  console.log(bt.height(bt.root));

  console.log('====levelWiseTraversing====');
  bt.levelWiseTraversing();

  console.log('====isSymmentric====')
  console.log(bt.isSymmetric())

  const bt2 = new BinaryTree();
  // bt2.root = new Node(0)
  bt2.insert(1);
  bt2.insert(2);
  bt2.insert(2);
  bt2.insert(3);
  bt2.insert(4);
  bt2.insert(4);
  bt2.insert(3);
  
  console.log('====isSymmentric=NewBT====')
  console.log(bt2.isSymmetric())

}

init();