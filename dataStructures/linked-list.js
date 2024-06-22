// linked list
// Node
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Linked List
class LinkedList {
  constructor(value) {
    this.head = null;
    this.tail = null;
    if (value) this.push(value);
  }
  
  // add a node to the end of the linked list.
  push(value) {
    // instantiate head node if needed
    if (!this.head) {
      this.head = new ListNode(value);
      this.tail = this.head;
      return;
    }
    // attach node at tail.
    this.tail.next = new ListNode(value);
    // point tail to end of list
    this.tail = this.tail.next;
  }

    // add a node to the list head
    unshift(value) {
      let newNode = new ListNode(value);
      newNode.next = this.head;
      this.head = newNode;
      if (!this.tail) this.tail = this.head;
    } 
    
    // insert a node at the index
    insert(value, index) {
      if (index === 0) {
        this.unshift(value);
        return;
      }
      let currIndex = 0;
      let currNode = this.head
      while (currIndex < index - 1) {
        if (!currNode) return `index not found in list of length ${currIndex}`;
        currNode = currNode.next;
        currIndex++;
      }
  
      let newNode = new ListNode(value);
      newNode.next = currNode.next;
      currNode.next = newNode;
      return;
    }

  // remove head of ll and return value
  pop() {
    if (!this.head) return null;
    // point head to next node
    let value = this.head.value
    this.head = this.head.next;

    return value;
  }

  // remove tail of ll and return value
  shift() {
    if (!this.head) {
      this.tail = null;
      return this.tail;
    };
    if (!this.head.next) {
      const value = this.head.value
      this.tail = null;
      this.head = this.tail;
      return value
    };
    // get second to last node
    let curr = this.head;
    while(curr.next?.next) {
      curr = curr.next;
    }
    // point its next value to null
    let value = curr.next.value;
    curr.next = null;
    // point the tail to that node. 
    this.tail = curr;
    return value;
  }

  deleteIndex(index) {
    // edge cases 
    // empty list return null
    if (!this.head) return null;
    // node at start point head to next node
    let currIndex = 0
    let currNode = this.head
    while(currIndex < index - 1) {
      if (!currNode.next) {
        return null;
      }
      currNode = currNode.next;
      currIndex++;
    } 

    if (!currNode.next.next) {
      this.shift();
      return;
    }
    // point that nodes next value to the node after the one at the position
    currNode.next = currNode.next.next;
  }

  deleteValue(value) {
    if (this.head.value === value) {
      this.pop(); 
      return;
    };
    let deletedValue;
    let currNode = this.head;
    while(currNode.next){
      if (currNode.next.value === value) {
        if (!currNode.next.next) {
          deletedValue = this.shift()
          return deletedValue
        }
        deletedValue = currNode.next.value;
        currNode.next = currNode.next.next;
        return deletedValue;
      }
      currNode = currNode.next;
    }
  }
}







