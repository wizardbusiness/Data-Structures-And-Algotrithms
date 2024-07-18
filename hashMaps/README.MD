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