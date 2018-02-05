# Counting Sort Notes

**Counting sort** = a sorting algorithm that trades space efficiency for
improved time efficiency by avoiding comparisons and using O(1) time insertions
and lookups in a list to its advantage

## Example
Let's say you're sorting integers and know they are bounded to the range of 1
to 100.  Sort by:

1. Create a list `num_counts` with indices representing the numbers from our
list and the value for each index representing the num of times that value
occurs, starting with 0 each time
2. In a single pass of the input list, update `num_counts`
3. Create a `sorted_list` where the sorted numbers will be stored
4. In a single in-order pass of `num_counts`, put each number, however many times it occurs into `sorted_list`

```Python
def counting_sort(the_list, max_value):
    # list of zeros at indices 0 to max_value
    num_counts = [0] * (max_value + 1)

    # populate num_counts
    for item in the_list:
        num_counts[item] += 1

    # initialize the final list
    sorted_list = []

    # for each item in num_counts
    for item, count in enumerate(num_counts):

        # for the number of times each item occurs
        for occurrence in range(count):

            # add it to the sorted list
            sorted_list.append(item)

    return sorted_list
```

Counting sort takes O(n) time and O(n) additional space from the new list that
is returned

Counting sort can be used in some circumstances when inputs aren't bounded integers as well, when we can write a function to map items to integers from 0 to some constant so that each item will always map to different integers.
