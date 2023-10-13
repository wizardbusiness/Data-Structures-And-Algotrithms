/**
 * Simple implementation, no collision handling or hash algo
 */
class SimpleHashMap {
  constructor() {
    this.hashObj = {};
  }
  /**
   *
   * @param {number} key
   * @param {number} value
   */
  put(key, value) {
    this.hashObj[key] = value;
    return;
  }
  /**
   *
   * @param {number} key
   * @returns {number}
   */
  get(key) {
    return key in this.hashObj ? this.hashObj[key] : -1;
  }
  /**
   *
   * @return {void}
   */
  remove(key) {
    if (key in this.hashObj) delete this.hashObj[key];
    return;
  }
}

/**
 * Complex implementation
 * Collision handling and hash algo
 */

class HashMap {
  constructor() {
    // array or linked list
    this.hashObj = new Array(23);
  }
  /**
   * Takes in a value and returns a key
   * @param {string} val
   * @returns {index}
   */
  hashVal(string, tableLength) {
    let hash = 17;
    for (let i = 0; i < string.length; i++) {
      // if hash for a char is 0, any subsequent hash value for the string will also be 0.
      // to avoid this, reset hash to prime number.
      if (hash === 0) hash = 17;
      hash = (hash * 13 * string.charCodeAt(i)) % tableLength; // modulo tablelength to ensure that hash is an index in table.
    }
    return hash;
  }
}

const hash = new HashMap();

hash.hashVal("firstName", 21);

