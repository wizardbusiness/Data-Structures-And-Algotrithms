---

**************
* ALGORITHMS *
**************

---

**Quick Sort**
Description: Sorts an array in O(nLogn) time in place
Key Concepts:

-quicksort-

- recursive
- start and end pointers
- base case: return if start is greater than or equal to end
- find partition index with helper partition function to divide array in two
  NOTE: the partition function also sorts the array so that elements to the left of the
  partition are less than the element at the partition, and elements to the right are greater than.

Key Strategies:
--LOMUTO PARTITION--
--The Partition--

- takes in array, start and end values
- pick pivot value
- set pivot index to start value
- iterate through partition from start to end
- if elements value is less than pivot value swap with element at pivot index and increment pivot index
- after iterating through partition, swap the element at the pivot index with the element picked for pivot value.
  result: All the elements to left are less than the pivot value, and all the elements to the right are greater than (or equal).

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
