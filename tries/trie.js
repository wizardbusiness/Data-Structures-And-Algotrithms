/**
 * @class TrieNode
 */

class TrieNode {
  constructor() {
    this.children = {};
    this.stringEnd = false;
  }
}

/**
 * @class Trie
 */

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  /**
   * @method insert
   * @param {string} string - string to be inserted
   */

  insert(string) {
    let currNode = this.root;
    for (const char of string) {
      if (char in currNode.children) {
        currNode = currNode.children[char];
      } else {
        currNode.children[char] = new TrieNode();
        currNode = currNode.children[char];
      }
    }
    currNode.stringEnd = true;
  }

  /**
   * @method startsWith
   * @param {string} substr - substr to search for
   */

  startsWith(substr) {
    let currNode = this.root;

    for (const char of substr) {
      if (!(char in currNode.children)) return false;
      else if (char in currNode.children) currNode = currNode.children[char];
    }

    return true;
  }

  /**
   * @method contains
   * @param {string} string - string to search for
   */

  contains(string) {
    let currNode = this.root;

    for (const char of string) {
      if (!(char in currNode.children)) return false;
      else if (char in currNode.children) currNode = currNode.children[char];
    }

    return currNode.stringEnd;
  }
}

const trie = new Trie();
trie.insert("fox");
trie.insert("foxy");
trie.insert("quick");
console.dir(trie, { depth: null });
console.log(trie.startsWith("fo"));
console.log(trie.startsWith(" "));

console.log(trie.contains("quick"));
