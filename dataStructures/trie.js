/**
 * @class TrieNode
 *
 */

class TrieNode {
  constructor() {
    this.children = {};
    this.wordEnd = false;
  }
}

/**
 * @class Trie
 * @property {object} root
 */

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  /**
   * @method insert
   * @param {string} string - the string to be inserted
   * @returns {void}
   */

  insert(string) {
    let currNode = this.root;
    // insert string one char at a time
    // if char does not exist at currnode, insert it
    [...string].forEach((char) => {
      if (!(char in currNode.children)) {
        currNode.children[char] = new TrieNode();
        currNode = currNode.children[char];
      } else if (char in currNode.children) {
        currNode = currNode.children[char];
      }
    });
    currNode.wordEnd = true;
  }

  /**
   * @method startsWith
   * @param {string} string - string that a word starts with in the trie
   * @returns {boolean}
   */

  startsWith(string) {
    let currNode = this.root;
    for (let char of string) {
      if (!(char in currNode.children)) {
        return false;
      } else if (char in currNode.children) {
        currNode = currNode.children[char];
      }
    }
    return true;
  }

  /**
   * @method contains
   * @param {string} string - string that matches a full word in the trie
   * @returns {boolean}
   */

  contains(string) {
    let currNode = this.root;
    for (let char of string) {
      if (!(char in currNode.children)) {
        return false;
      } else if (char in currNode.children) currNode = currNode.children[char];
    }
    return currNode.wordEnd;
  }
}

const trie = new Trie();

trie.insert("cat");
trie.insert("cast");
trie.insert("rose");

console.log(trie.startsWith("ro"));
console.log(trie.startsWith("x"));
console.log(trie.contains("rose"));

console.dir(trie, { depth: null });
