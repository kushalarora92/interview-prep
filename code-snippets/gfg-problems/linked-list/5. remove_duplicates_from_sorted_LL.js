// https://www.geeksforgeeks.org/remove-duplicates-from-a-sorted-linked-list/?ref=lbp

class Node {
  next;
  val;
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

export default class LinkedList {
  constructor() {
    this.head = null;
  }

  append(val) {
    const node = new Node(val);
    if (this.head == null) {
      this.head = node;
      return;
    }

    let curr = this.head;
    while (curr.next != null) {
      curr = curr.next;
    }

    curr.next = node;
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

  // can be done by removing forward node; // optimized

  removeDuplicates() {
    if (this.head == null) {
      return null;
    }

    let curr = this.head;
    let prevNode = null;
    while(curr != null) {
      if (prevNode && prevNode.val == curr.val) {
        prevNode.next = curr.next;
      } else {
        prevNode = curr;
      }
      curr = curr.next;
    }

    return this;
  }
}

function initDriverCode() {
  const ll = new LinkedList();

  ll.append(-1);
  ll.append(-1);
  ll.append(2);
  ll.append(3);
  ll.append(4);
  ll.append(4);
  ll.append(5);
  ll.append(6);

  console.log(ll.removeDuplicates().toArray());
}

initDriverCode();