---

**************
* ALGORITHMS *
**************

---

**Quick Sort**

Description: Sorts an array in OnLog(n) time

Key Concepts: 
- 2 pointers, i and j
- divide and conquer
- pivot

Key Strategies: 
--SIMPLE WAY-- 
--The Partition--
- pick pivot
- init two empty arrays, left and right
- compare each el to pivot
- if less than push to left
- if greater than push to right
-- The Base Case -- 
- if arr length is 0 or 1 return the arr
-- The Recursive Case --
- return the spread res of calling quicksort on left, pivot, and quicksort on right [...quicksort(left), pivot, ...quicksort(right)]l

-- Gotchas --
* quicksort left and right recursive calls need to be returned, not just called


--The Partition--
- pick pivot
- increment i and decrement j
- if i > pivot and j < pivot swap elements at i and j
- when i crosses j, swap pivot with element at j
--The Split--
- call quicksort recursively for subarrays to left and right of pivot
- keep going until each array is either one or two elements
--The Merge--
- combine each sorted subarray
