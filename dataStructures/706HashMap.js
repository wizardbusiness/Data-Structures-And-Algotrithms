class HashMap {
  constructor() {
    this.hashMap = new Array(20);
  }
  /**
   * @method hashKey
   * @param {string} key
   * @returns {int} hash index
   */
  hashKey(keyStr) {
    let hash = 17;
    for (let i = 0; i < keyStr.length; i++) {
      hash = Math.pow(keyStr.charCodeAt(i), 2) * 17;
    }

    return hash % this.hashMap.length;
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
    const hashIndex = this.hashKey(key);
    const collision = !!this.hashMap[hashIndex];
    const bucket = this.hashMap[hashIndex];
    const arrayInBucket = collision && Array.isArray(this.hashMap[hashIndex]);
    if (collision && arrayInBucket) {
      this.hashMap[hashIndex] = [...bucket, { key: key, val: val }];
    } else if (collision && !arrayInBucket) {
      this.hashMap[hashIndex] = [bucket, { key: key, val: val }];
    } else {
      this.hashMap[hashIndex] = { key: key, val: val };
    }
  }

  get(key) {
    const hashIndex = this.hashKey(key);
    const bucket = this.hashMap[hashIndex];
    if (Array.isArray(bucket)) {
      for (const item of bucket) {
        if (item.key === key) return item.val;
      }
    } else if (bucket.key === key) return bucket.val;

    return;
  }

  // put
  // remove
  // find
}

const hashMap = new HashMap();

hashMap.set("hi", "there");
hashMap.set("fly", "there");
hashMap.set("general", "kenobi");
console.log(hashMap.hashMap);

console.log(3 & 2);
console.log(hashMap.get("hi"));
