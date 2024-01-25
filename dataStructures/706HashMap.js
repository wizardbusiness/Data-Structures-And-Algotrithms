class HashMap {
  constructor() {
    this.hashMap = new Array(20);
  }
  /**
   * @method hashValue
   * @param {string} str
   * @returns {int} hash index
   */
  hashValue(str) {
    let hash = 17;
    for (let i = 0; i < str.length; i++) {
      if (hash === 0) hash = 17;
      hash = (hash ^ str.charCodeAt(i)) % this.hashMap.length;
    }
    return hash;
  }
  // set
  /**
   * @method set
   * @param {string} key
   * @param {string | int} val
   * @returns {void}
   * @description - adds a string to the hashmap
   */

  set(key, val) {
    const hashIndex = this.hashValue(key);
    const bucket = this.hashMap[hashIndex];
    const collision = !!this.hashMap[hashIndex];
    if (!collision) {
      this.hashMap[hashIndex] = { key: key, val: val };
    } else if (collision) {
      if (Array.isArray(bucket)) {
        this.hashMap[hashIndex] = [...bucket, { key: key, val: val }];
      } else {
        this.hashMap[hashIndex] = [bucket, { key: key, val: val }];
      }
    }
  }

  get(key) {
    const hashIndex = this.hashValue(key);
    const bucket = this.hashMap[hashIndex];
    if (bucket) {
      if (Array.isArray(bucket)) {
        for (const obj of bucket) {
          if (obj.key === key) return obj.val;
        }
      } else {
        return bucket.val;
      }
    }
  }

  // put
  // remove
  // find
}

const hashMap = new HashMap();

hashMap.set("hi", "there");
hashMap.set("hi", "there");
hashMap.set("general", "kenobi");
console.log(hashMap.hashMap);

console.log(3 & 2);

console.log(hashMap.get("general"));
