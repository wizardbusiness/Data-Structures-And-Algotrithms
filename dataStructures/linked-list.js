// Singly linked list
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/**
 * Single Linked List
 * Head is start of list
 * Tail is end of list
 * 
 */

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = this.head;
  }

  push(val) {
    if (!this.head) {
      this.head = new Node(val);
      this.tail = this.head;
    } else {
      let currNode = this.head;
      while (currNode.next) {
        currNode = currNode.next;
      }
      currNode.next = new Node(val);
      this.tail = currNode.next;
    }
    
  }

  unshift(val){
    if (!this.head) {
      this.head = new Node(val);
      this.tail = this.head;
    } else {
      const newHead = new Node(val);
      newHead.next = this.head;
      this.head = newHead;
    }
  }

  pop() {
    if (!this.tail) return -1;
    let currNode = this.head;
    while (currNode.next.next) {
      currNode = currNode.next;
    };
    
    currNode.next = null;
    this.tail = currNode;
    return (currNode);
  }

  delete(val) {
    let currNode = this.head;
    // first node
    if (currNode.value === val && currNode === this.head) {
      this.head = currNode.next;
    }
    while(currNode.next) {
      if (currNode.next.value === val) {
        // last node
        if (currNode.next.next === null) {
        this.tail = currNode;
        } 
        // node in middle
        currNode.next = currNode.next.next;
        return;
       
        
      } 
      currNode = currNode.next;
    }
  }


}

const ll = new SinglyLinkedList();

ll.push(1);
ll.push(2);
ll.push(3);
ll.push(4);

ll.delete(4);

console.dir(ll, {depth: null})