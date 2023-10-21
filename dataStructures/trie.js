// node 
class TrieNode {
  constructor() {
    this.children = {};
    this.wordEnd = false;
  }
}
// trie
class Trie {
  constructor() {
    this.root = new TrieNode()
  }

  insert(word) {
    let curr = this.root;
    for (let char of word) {
      if (!(char in curr.children)) {
        curr.children[char] = new TrieNode();
      }
      curr = curr.children[char];
    }
    curr.wordEnd = true;
  } 

  find(word) {
    let curr = this.root;
    for (let char of word) {
      if (!(char in curr.children)) return false;
      curr = curr.children[char];
    }
    return curr.wordEnd;
  }

  startsWith(str) {
    let curr = this.root;
    for (let char of str) {
      if (!(char in curr.children)) return false;
      curr = curr.children[char]
    }
    return true;
  }
}

const trie = new Trie();




