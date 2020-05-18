// https://www.geeksforgeeks.org/function-to-check-if-a-singly-linked-list-is-palindrome/?ref=lbp

class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head instanceof Node ? head : null;
  }

  append(val) {
    const node = new Node(val);
    if (this.head === null) {
      this.head = node;
      return;
    }

    let curr = this.head;
    while(curr.next != null) {
      curr = curr.next;
    }

    curr.next = node;
  }

  prepend(val) {
    const node = new Node(val, this.head);
    if (this.head === null) {
      this.head = node;
    }

    this.head = node;
  }

  removeHead() {
    if (this.head === null) {
      return false;
    }

    const val = this.head.val;
    this.head = this.head.next;
    return val;
  }

  toArray() {
    const arr = [];
    let curr = this.head;
    while(curr != null) {
      arr.push(curr.val);
      curr = curr.next;
    }
    return arr;
  }

  peak() {
    return this.head ? this.head.val : null;
  }

  isPalindrome() {
    const stack = new StackLL();
    // traverse to fill stack
    let curr = this.head;
    while(curr != null) {
      stack.push(curr.val);
      curr = curr.next;
    }
    
    // now check if every pop is equal to traversed val
    curr = this.head;
    while(curr != null) {
      if (curr.val != stack.pop()) { return false; }
      curr = curr.next;
    }

    return true;
  }

  isPalindromeSingleLoop(curr = this.head, queue = new QueueLL()) {
    if (curr == null) { return };
    queue.enqueue(curr.val);
    this.isPalindromeSingleLoop(curr.next, queue);
    if (curr.val !== queue.dequeue()) return false;
    if (curr === this.head) return true; 
  }
}

class Stack {
  constructor() {
    this.ll = new LinkedList();
  }

  push(val) {
    this.ll.prepend(val);
  }

  pop() {
    return this.ll.removeHead()
  }

  toArray() {
    return this.ll.toArray();
  }
}

class StackLL extends LinkedList {
  constructor() {
    super();
  }

  push(val) {
    return this.prepend(val);
  }

  pop() {
    return this.removeHead();
  }
}

class QueueLL extends LinkedList {
  constructor() { super(); }

  enqueue(val) {
    this.append(val);
  }

  dequeue() {
    return this.removeHead();
  }
}

function initDriverCode() {
  const ll = new LinkedList();

  ll.append('A');
  ll.append('R');
  ll.append('Oo');
  ll.append('R');
  ll.append('A');

  return ll;
}
console.time('driver_code')
const ll = initDriverCode();
console.timeEnd('driver_code')

console.time('execution_time_isPalindrome');
console.log(ll.isPalindrome());
console.timeEnd('execution_time_isPalindrome');

console.time('execution_time_isPalindromeSingleLoop');
console.log(ll.isPalindromeSingleLoop());
console.timeEnd('execution_time_isPalindromeSingleLoop');