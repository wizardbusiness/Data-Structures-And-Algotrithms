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
