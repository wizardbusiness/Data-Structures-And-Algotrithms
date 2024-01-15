---

**************
* ALGORITHMS *
**************

---

**Quick Sort**
Description: Sorts an array in O(nLogn) time
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

  - quicksort left and right recursive calls are what is spread, not the original left and right arrays.
  - the base case needs to be if array length is LESS THAN or equal to one. Otherwise empty arrays do not return and stack overflow.
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

- Description: Sort using heap structure

- -- Key Concepts --
  - Heap

_Merge Sort_

- Description: Bifurcate an unsorted array into sorted arrays of 1 or no elements, then merge them back together

- -- Key Concepts --

  - Divide and conquer
  - Recursive divide
  - Recursive merge
  - O(nlogn) time

- Strategy

  - See description
  - Bifurcate unsorted array into left and right halves recursively
  - subarrays with 1 or no elements are sorted by definition
  - to sort, compare the first elements of left and right and move them to a new sorted array.
  - do that until either left and right doesn't have any more elements.
  - merge the left, sorted, and right arrays together.

- Gotchas

  - you must return the result of merging the arrays after bifurcating them.
  - when sorting, use a loop (this is the n of n log n);
  - when sorting, SHIFT only the smaller element from start of one of the arrays.
  - when merging, merge sorted THEN left, then right. (we dont know if l and r have unsorted elements)
  - only sort while left and right arrays BOTH contain elements. MUST compare length, array can still be true when empty

  _Binary Search_

- Description: Searches for a value in a sorted array in O(logn) time

- Strategy:

  - Divide and conquer
  - Recursive
  - Check if value is greater than or less than middle value of array
  - Eliminate the side of the array that doesn't contain the value from the search algorithm

- Gotchas
  - Make sure to use middle index not middle value when slicing array
  - Slicing includes initial index and excludes second index;
