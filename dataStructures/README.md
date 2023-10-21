---
*******************
* DATA STRUCTURES *
*******************
---

**Basic Concepts**

_Hashmaps_

- 706. Design Hashmap

Notes: Keep it simple. Ask before creating hash algo and collision solutions.
Concepts:

- key in obj: checks if a key exists in an object
- hash: Can be any structure, but object is easiest
- class: Remember how to construct a class in js
- delete keyword. Removes key from object ex. 'delete obj[key]'.

-hash algo:

- modulo: % tableLength
- set initial hash to prime number (17 and 13 are good ones!)
- for loop
- charcodeAt for chars in string

Gotchas:
conceptual gotchas:

- Don't worry about implementing a hash algorithm unless its asked for.
- Same goes for an array based solution that requires dealing with collisions.

technical gotchas:

- for simple obj hash, use 'key in' to check if key in obj. Using 'obj[key]' will return false if value is 0
- in hash algo, if a chars hash is 0 it will cause any subsequent hash on the same substring to also be 0. if hash is 0 set to hash to prime.

Put: add key and value to hash obj.
Get: retrieve a value associated with a key.
Remove: remove a key (and value) from the hash obj.

_Binary Search Trees_
Notes:
Insert:

- While loop
- nested if else
- count property for duplicate values
  Find:
- same as insert
- return node or just value?
  Delete:
    - Tricky
    - Recursive
    - Base return root if root is null
    - While loop to search child branch for new node to replace deleted node at its location in bst.
    - Use delete method to remove nodes. // doesnt work in strict mode

_Graphs_

-Directional graphs:
Structure: - Obj with nodes as keys and arrays of neighbor nodes as values - Traversal between nodes is unidirectional
Traversal:
Depth first: - Check all nodes in one direction before checking additional nodes. - Stack - iterative or recursive
Breadth first: - Check all neighbors nodes before checking additional nodes.

_Linked Lists_

Key Concepts: 
- Nodes
- Linked means nested
- head and tail

Singly Linked List:
  * Key Concepts: 
    - head
    - tail
    - next

  * Methods: 
      * Basic
        - Find
        - Push
          * Description: add node to the end of the list;
          * -- Key Concepts --
            * curr
        - Pop
          * Description: pop the last node off the list, and return it.
          * -- Key Concepts --
            * currNode pointer
            * Iterate through list
            * remove last node
            * reassign tail
          * -- Gotchas --
            * If you iterate until curr node is one you want to delete, that wont work.
            * You needto delete the next value of currNode, not currNode itself.
      - Add (to end)
      - Remove
        * -- Key Concepts --
          * Break down by case
            - Remove from start
            - Remove from end
            - Remove from Middle
          * Tackle start and end edge cases first
          * iterate through linked list
        * -- Gotchas --
          * always reassign to address, not value
          * if node is removed from start or end, thats a different strategy
      - Print
    * Advanced
      - Reverse
      - Add (to middle)

_Tries_

Key Concepts:
  - Nodes
  - Used for alphabet strings
  - Each node stores a char map which can have a node for every letter in alphabet- 26 max.
  - Deeply Nested
  - Words are retrieved by searching down a branch composed of chars
  - Good for finding partial matches
  - O(logn)

* Methods
  - insert
    * Description: insert a string into the trie;
    * -- Key Concepts --
      * for loop
        - iterate through chars in word
      * current node
        - point to child node in children at curr.children[char]
      * check if char exists in children
        - exists, point to node 
        - doesn't exist, create new node in children
      * end of word
        - after loop, assign current nodes wordEnd property true
  - search
    * Description: check if a complete word is stored in the trie.
    * -- Key Concepts --
      * for loop
        - iterate through chars in word
      * current node
        - initialy points to root
        - child node located in children
      * check if each char is present in branch
      * check the value of wordEnd property after traversing char nodes and return it
  - startsWith
    * Description: check if a word that starts with a str is stored in the trie
    * -- Key Concepts --
      * Same as searching for a complete word, except that if all chars are found, always return true. 


