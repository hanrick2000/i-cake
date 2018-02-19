# Dynamic Arrays

**Dynamic arrays** = data structure that automatically grows when new items
are inserted and there is no additional space left for the item.  Because
of how things must be done behind the scenes, the array usually doubles in
size.

For arrays that are full, when inserting a new item, we incur an
O(n) time cost because the entire array must be copied before we can add the
new item.

Most of the time, however, we are appending only into a non-full array, which
is still O(1) time.

**Amortized analysis** = looking at the cost of a single action averaged over
a large number of actions (ie: array appends)

The amortized cost of doing m appends is m (the cost of appends), plus 2m
(the doubling costs) = 3m which is O(m)
  - Even though the amortized cost of an append is O(1), the worst case is
    O(n), so some append will take a long time
