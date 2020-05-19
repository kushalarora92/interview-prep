const mergesortUsingArrays = require('./mergesort');

function mergesortUsingLL(ll) {
  return new LinkedList(mergeSort(ll.head));
}

class Node {
  next;
  val;

  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class LinkedList {
  constructor(head = null) { this.head = head; }

  append(val) {
    const node = new Node(val);
    if (this.head == null) { this.head = node; return; }

    let curr = this.head;
    while (curr.next != null) {
      curr = curr.next; 
    }

    curr.next = node;
  }

  toArray() {
    const arr = [];
    if (this.head === null) { return arr; }

    let curr = this.head;
    while (curr != null) {
      arr.push(curr.val);
      curr = curr.next;
    }

    return arr;
  }
}

function printList(head) {
  const arr = [];
  while(head != null) {
    arr.push(head.val);
    head = head.next;
  }
  return arr;
}

function getMiddle(node) {
  let slow = node, fast = node;

  while (fast.next != null && fast.next.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

function mergeSort(node) {
  if (node === null) { return; }
  if (node.next === null) { return node; }

  const middle = getMiddle(node);
  const nextToMiddle = middle.next;

  // update middle's next to null to close the ll
  middle.next = null;
  // console.log(middle.val);
  return merge(
    mergeSort(node),
    mergeSort(nextToMiddle)
  )
}

function merge(left, right) {
  let head = null;
  let curr = null;
  while(left != null && right != null) {
    if (left.val <= right.val) {
      if (head === null) {
        head = new Node(left.val);
        curr = head;
      } else {
        curr.next = new Node(left.val);
        curr = curr.next;
      }
      left = left.next;
    } else {
      if (head === null) {
        curr = head = new Node(right.val);
      } else {
        curr.next = new Node(right.val); 
        curr = curr.next;
      }
      right = right.next;
    }
  }
  if (left != null) {
    curr.next = left;
  } else if (right != null) {
    curr.next = right;
  }

  return head;
}

function initDriverCode() {
  const ll = new LinkedList();
  ll.append(5);
  ll.append(4);
  ll.append(7);
  ll.append(2);
  ll.append(8);
  ll.append(1);
  ll.append(89);
  ll.append(63);
  ll.append(0);
  ll.append(15);
  ll.append(3);


  // const arr = ll.toArray()
  // console.time('mergesortUsingArrays');
  // console.log(mergesortUsingArrays(arr));
  // console.timeEnd('mergesortUsingArrays');

  // console.log(ll)
  // console.log(printList(ll.head));
  console.time('mergesortUsingLL');
  console.log(mergesortUsingLL(ll).toArray());
  console.timeEnd('mergesortUsingLL');
  console.log(ll.toArray())

}

initDriverCode();