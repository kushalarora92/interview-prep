import LinkedList from '../1. linked-list/LinkedList';

/**
 * Functions to implement
 *  isEmpty
 *  peak
 *  enqueue
 *  dequeue
 *  toString
 */

export default class QueueUsingLinkedList {
  constructor() {
    this.linkedList = new LinkedList();
  }

  isEmpty() {
    return !this.LinkedList.head;
  }

  peak() {
    return this.linkedList.head ? this.linkedList.head.value : null;
  }

  enqueue(value) {
    return this.linkedList.append(value);
  }

  dequeue() {
    return this.linkedList.removeHead();
  }

  toString(cb) {
    return this.linkedList.toString(cb);
  }


}