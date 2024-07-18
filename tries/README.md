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
    - Description: insert a string into the trie;
    - -- Key Concepts --
      - for loop
        - iterate through chars in word
      - current node
        - point to child node in children at curr.children[char]
      - check if char exists in children
        - exists, point to node
        - doesn't exist, create new node in children
      - end of word
        - after loop, assign current nodes wordEnd property true
  - search
    - Description: check if a complete word is stored in the trie.
    - -- Key Concepts --
      - for loop
        - iterate through chars in word
      - current node
        - initialy points to root
        - child node located in children
      - check if each char is present in branch
      - check the value of wordEnd property after traversing char nodes and return it
  - startsWith
    - Description: check if a word that starts with a str is stored in the trie
    - -- Key Concepts --
      - Same as searching for a complete word, except that if all chars are found, always return true.
