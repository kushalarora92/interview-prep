class Node {
  val;
  next;

  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class LinkedList {
  head;

  constructor(val, next) {
    if (val != null) {
      this.head = new Node(val, next);
    }
  }
  
  append(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      return node.val;
    }

    let curr = this.head;
    while (curr.next != null) {
      curr = curr.next;
    }
    curr.next = node;
  }

  toArray() {
    const result = [];
    let curr = this.head;
    while(curr != null) {
      result.push(curr.val);
      curr = curr.next;
    }
    return result;
  }
}

function initDriverCode() {
  // driver code
  const ll1 = new LinkedList(5);
  ll1.append(2);
  ll1.append(1);
  ll1.append(199);
  ll1.append(150);

  const ll2 = new LinkedList(1);
  ll2.append(199);
  ll2.append(150);

  return [ll1, ll2];
}

// https://www.geeksforgeeks.org/write-a-function-to-get-the-intersection-point-of-two-linked-lists/
function intersectionPointsLL(ll1, ll2) {
    let currLL1 = ll1.head;
    let currLL2;

    const result = new LinkedList(); 
    while(currLL1 != null) {
      currLL2 = ll2.head;
      while(currLL2 != null) {
        if (currLL1.val === currLL2.val) {
          result.append(currLL1.val);
        }
        currLL2 = currLL2.next;
      }
      currLL1 = currLL1.next;
    }

    return result;
}

const lls = initDriverCode();
console.log(intersectionPointsLL(...lls).toArray());