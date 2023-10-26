---

**************
* ALGORITHMS *
**************

---

**Quick Sort**

Description: Sorts an array in OnLog(n) time

Key Concepts: 
- pivot
- compare elements to pivot
- divide and conquer

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
- return the spread res of calling quicksort on left, pivot, and quicksort on right [...quicksort(left), pivot, ...quicksort(right)]
-- Gotchas --
* quicksort left and right recursive calls need to be returned, not just called
--STANDARD WAY-- 
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


_Heap Sort_

* Description: Sort using heap structure

* -- Key Concepts --
  * Heap


_Merge Sort_

* Description: Sort an array by dividing them into sorted subarrays, and the merging those back together. 

* -- Key Concepts --
  * Divide and conquer
  * Recursive divide
  * Recursive merge
  * O(nlogn) time

* Strategy
  - See description
  - Base case: if array length is 0 or 1 return array
  - Recursive case: divide array into left and right
  - Sort and Merge: 
    - while left and right arrays
    - compare first elements in left and right arrays
    - shift the smaller element to new sorted array
    - return merge of sorted, and remaining els of left and right arrays in that order.

* Gotchas
  - when sorting, use a loop (this is the n of n log n);
  - when sorting, SHIFT only the smaller element from start of one of the arrays. 
  - only sort while left and right arrays BOTH contain elements. 
