// node on linked list.
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // add a new node to the end of the list. Use two pointers for O(1) insertion.
  addToEnd(value) {
    // if head doesn't point to a node,
    if (!this.head) {
      // point head to a new node passing in the value,
      this.head = new Node(value);
      // and point tail to head.
      this.tail = this.head;
    } else {
      // assign the next property on tail to point to a newly added node.
      this.tail.next = new Node(value);
      // assign tail to point to the next property on that new node that was just created.
      this.tail = this.tail.next;
    }
    this.length++;
  }

  insertAtBeginning(value) {
    // create a new node.
    // point head to it's next property.
    this.new = new Node(value);
    this.new.next = this.head;
    this.head = this.new;
    delete this.new;
  }
}

const ll = new LinkedList();

ll.addToEnd(1);
ll.insertAtBeginning(2);
ll.insertAtBeginning(2);
console.log(ll);
