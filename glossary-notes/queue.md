# Queue Notes

**Queues** = data structure to represent a series of items.  They are first-in,
first-out (FIFO), such that the oldest item in the queue will be the first to
come out (like a line at Disney)

Queues have two main methods:
1. `enqueue()` = add items
2. `dequeue()` = remove and return the next item in line

Sometimes queues also have utility methods:
3. `peek()` = return item at the front of the queue without removing it
4. `is_empty()` = return `True` if queue empty, otherwise `False`
