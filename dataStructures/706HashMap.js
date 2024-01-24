// /**
//  * Simple implementation, no collision handling or hash algo
//  */
// class SimpleHashMap {
//   constructor() {
//     this.hashObj = {};
//   }
//   /**
//    *
//    * @param {number} key
//    * @param {number} value
//    */
//   put(key, value) {
//     this.hashObj[key] = value;
//     return;
//   }
//   /**
//    *
//    * @param {number} key
//    * @returns {number}
//    */
//   get(key) {
//     return key in this.hashObj ? this.hashObj[key] : -1;
//   }
//   /**
//    *
//    * @return {void}
//    */
//   remove(key) {
//     if (key in this.hashObj) delete this.hashObj[key];
//     return;
//   }
// }

// /**
//  * Complex implementation
//  * Collision handling and hash algo
//  */

// class HashMap {
//   constructor(size) {
//     // array or linked list
//     this.table = new Array(size);
//     this.emptyBuckets = this.table.length;
//   }
//   /**
//    * Takes in a value and returns a key
//    * @param {string} val
//    * @returns {index}
//    */
//   hash(string, tableLength) {
//     let hash = 17;
//     for (let i = 0; i < string.length; i++) {
//       // if hash for a char is 0, any subsequent hash value for the string will also be 0.
//       // to avoid this, reset hash to prime number.
//       if (hash === 0) hash = 17;
//       hash = (hash * 13 * string.charCodeAt(i)) % tableLength; // modulo tablelength to ensure that hash is an index in table.
//     }
//     return hash;
//   }

//   set(val) {
//     // add value to hashmap
//     const hash = this.hash(val, this.table.length);
//     // if hash table is 3/4 full, double the size of the hash table
//     if (this.emptyBuckets < Math.floor(this.table.length * 3/4)) {
//       this.table = [...this.table, ...new Array(this.table.length)];
//       this.emptyBuckets = this.table.length;
//     }
//     // if collisions
//     if (this.table[hash]) {
//       // add array at collision point.
//       if (Array.isArray(this.table[hash])) this.table[hash].push(val)
//       else this.table[hash] = [this.table[hash], val];
//       return;
//     };

//     this.table[hash] = val;
//     this.emptyBuckets--;
//     return;
//   }
// }

// const hash = new HashMap(6);

// const addValuesToHash = (arr, hash) => {
//   arr.forEach(val => hash.set(val));
// }

// const strings = ['the', 'quick', 'brown', 'fox', 'jumped', 'over', 'the', 'lazy', 'dog']

// addValuesToHash(strings, hash);

// console.log(hash.table)

class HashMap {
  constructor() {
    this.hashMap = new Array(20);
  }
  // hash
  hashAlgo(string) {
    let hashVal = 13;
    for (let i = 0; i < string.length; i++) {
      // reset hash if it reaches 0
      if (hashVal === 0) hashVal = 13;
      hashVal = (hashVal * string.charCodeAt(i)) % this.hashMap.length;
      console.log(hashVal);
    }
    console.log(hashVal);
    return hashVal;
  }
  // set
  /**
   * @method set
   * @param {string}
   * @returns {void}
   * @description - adds a string to the hashmap
   */

  set(string) {
    const hashIndex = this.hashAlgo(string);
    if (this.hashMap[hashIndex]) {
      if (Array.isArray(this.hashMap[hashIndex])) {
        this.hashMap[hashIndex].push(string);
      } else {
        this.hashMap[hashIndex] = [this.hashMap[hashIndex], string];
      }
    } else {
      this.hashMap[hashIndex] = string;
    }
  }

  // put
  // remove
  // find
}

const hashMap = new HashMap();

hashMap.set("hi");
hashMap.set("there");
hashMap.set("general");
console.log(hashMap.hashMap);
