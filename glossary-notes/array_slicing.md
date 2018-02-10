# Array Slicing Notes

**Array slicing** = allocating a new array based on a subset of elements from another array

Array slicing takes O(n) time and O(n) space, with n being the number of elements in the new list
  - this is because we have to allocate a new list, then copy the desired elements from the first list to the second
  - this is incurred even if you aren't saving the result to a new variable
