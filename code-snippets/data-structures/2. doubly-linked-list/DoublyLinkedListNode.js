export default class DoublyLinkedListNode {
  prev;
  value;
  next;

  constructor(value, prev = null, next = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}