_Linked Lists_

Key Concepts:

- Nodes
- Linked means nested
- head and tail

Singly Linked List:

- Key Concepts:

  - head
  - tail
  - next

- Methods:

  - Basic
    - Find
    - Push
      - Description: add node to the end of the list;
      - -- Key Concepts --
        - curr
    - Pop
      - Description: pop the last node off the list, and return it.
      - -- Key Concepts --
        - currNode pointer
        - Iterate through list
        - remove last node
        - reassign tail
      - -- Gotchas --
        - If you iterate until curr node is one you want to delete, that wont work.
        - You needto delete the next value of currNode, not currNode itself.

  * Add (to end)
  * Remove
    - -- Key Concepts --
      - Break down by case
        - Remove from start
        - Remove from end
        - Remove from Middle
      - Tackle start and end edge cases first
      - iterate through linked list
    - -- Gotchas --
      - always reassign to address, not value
      - if node is removed from start or end, thats a different strategy
  * Print
  * Reverse

    - -- Key Concepts --

      - Reverse in place (space O(1))
      - Two lists
        a. Unreversed List
        b. Reversed List
      - Pointers keep track of both while they are disconnected
        1. prev - the head of the reversed list
        2. curr - the head of the list being reversed
        3. next - the next node inside the list being reversed.
      - Setup
        1. Prev points to null
        2. Curr points to head
        3. Next points to head
        4. Tail points to head
      - Order of operations
        1. Next pointed to curr.next
        2. Curr.next pointed to prev
        3. Prev pointed to curr
        4. Curr pointed to curr.next
      - Repoint old head to new head
        - Head points to prev (which is always the new head of the reversed linked list)

    - Add (to middle)