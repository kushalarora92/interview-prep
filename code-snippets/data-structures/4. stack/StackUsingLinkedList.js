import LinkedList from '../1. linked-list/LinkedList';

/**
 * Functions to implement
 * isEmpty
 * peak
 * push
 * pop
 * toArray
 * toString
 */

export default class StackUsingLinkedList {
  constructor() {
    this.linkedList = new LinkedList();
  }

  push(value) {
    return this.linkedList.prepend(value);
  }

  pop() {
    return this.linkedList.deleteHead();
  }
}