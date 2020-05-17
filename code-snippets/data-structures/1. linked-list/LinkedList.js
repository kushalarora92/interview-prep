import LinkedListNode from './LinkedListNode';
/**
 * Functions to implement:
 *  prepend
    apend
    delete
    find
    deleteTail
    deleteHead
    fromArray
    toArray
    toString
    reverse    
 */
class LinkedList {
  head;
  tail;

  constructor() {
    this.tail = this.head = null;
  }

  isEmpty() {
    return this.head === null;
  }

  append(value) {
    const node = new LinkedListNode(value);

    if (this.isEmpty()) {
      this.head = this.tail = node;
      return this;
    }

    this.tail.next = node;
    this.tail = node;
    return this;
  }

  prepend(value) {
    const node = new LinkedListNode(value, this.haed);

    if (this.isEmpty()) {
      this.head = this.tail = node;
      return this;
    }

    this.head = node;
    return this;
  }

  delete(value) {
    if (this.isEmpty()) {
      return;
    }

    // this.deleteIfSingleElementList();

    if (this.head.value === value) {
      // first element
      this.head = this.head.next;
      return value;
    }

    let curr = this.head;
    let prev = null;
    while (curr.next != null) {
      curr = curr.next;
      if (curr.val === value) {
        prev.next = curr.next;
        return value;
      }
      prev = curr;
    }

    if (curr.value === value) {
      prev.next = null;
      return value;
    }

    return;
  }

  deleteIfSingleElementList() {
    if (this.head === this.tail) {
      const val = this.head.value;
      this.head = null;
      this.tail = null;
      return val;
    }
  }

  deleteHead() {
    if (this.isEmpty()) return;

    let val = this.deleteIfSingleElementList();
    if (val) { return val; } 

    val = this.head.value;
    this.head = this.head.next;
    return val;
  }

  deleteTail() {
    if (this.isEmpty()) return;

    let val = this.deleteIfSingleElementList();
    if (val) { return val; } 

    val = this.tail.value;
    
    let curr = this.head;
    while(curr.next != this.tail) {
      curr = curr.next;
    }

    curr.next = null;
    this.tail = curr;

    return val;
  }
  
  find(value, cb) {
    if (this.isEmpty()) return;
    
    let curr = this.head;
    while(curr != null) {
      // If callback is specified then try to find node by callback.
      if (cb && cb(curr.value)) {
        return curr;
      }
      
      if (curr.value === value) {
        return curr;
      }
      curr = curr.next;
    } 
  }

  fromArray(values = []) {
    values.forEach(value => this.append(value));
    return this;
  }

  toArray() {
    const values = [];

    if (!this.isEmpty()) {
      let curr = this.head;
      while (curr != null) { // != null can be replaced by just while(curr)
        values.push(curr.value);
        curr = curr.next;
      }
    }

    return values;
  }

  toString(cb) {
    let str = '';

    if (!this.isEmpty()){
      let curr = this.head;
      while(curr) {
        str.concat((cb && cb(curr.value)) || curr.value);
        curr = curr.next;
      }
    }

    return str;
  }

  reverseAndReturnNewLL() {
    if (this.head === null) { return; } // isEmpty;

    const reversedLL = new LinkedList();

    let curr = this.tail;
    
    while(curr != this.head) {
      let prev = this.head;

      while (prev.next != curr) {
        prev = prev.next;
      }

      reversedLL.append(curr.value);
      curr = prev;
    }

    reversedLL.append(curr.value);
    return reversedLL;
  }

  reverseExistingLL() {
    let currNode = this.head,
      nextNode = null,
      prevNode = null;

    while(currNode) {
      nextNode = currNode.next;

      currNode.next = prevNode;

      prevNode = currNode;
      currNode = nextNode;
    }

    this.tail = this.head;
    this.head = prevNode;
    
    return this;
  }
}

module.exports = LinkedList;