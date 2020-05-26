// https://www.geeksforgeeks.org/print-reverse-of-a-linked-list-without-actually-reversing/?ref=lbp

class Node {
  val;
  next;

  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
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

  printReverse(curr = null) {
    reverseCb(this.head);
    function reverseCb(curr = null) {
      if (curr == null) return;
      reverseCb(curr.next)
      console.log(curr.val);
    }
  }
}

function initDriverCode() {
  const ll = new LinkedList();
  ll.append(1);
  ll.append(2);
  ll.append(3);
  ll.append(4);
  ll.append(5);
  ll.append(6);

  ll.printReverse();
}

initDriverCode();