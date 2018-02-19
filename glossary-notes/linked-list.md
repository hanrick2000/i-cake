# Linked Lists

**linked lists** = low level data structure to store ordered sequences of items
in "node" objects that have pointers to other nodes

**singly-linked lists** = type of linked list in which each node only has a
pointer to the next node in the list

Example:
```python
class LinkedListNode:

    def __init__(self, value):
        self.value = value
        self.next = None

a = LinkedListNode(5)
b = LinkedListNode(1)
c = LinkedListNode(9)

a.next = b
b.next = c
```

The first node of a linked list is called the **head**

The last node of a linked list is called the **tail**

Many times, the only connection available to the list itself is a variable
that points to the head of the list (from which all other nodes can be found)

Because linked lists are also ordered lists of items like arrays, often a
choice can be made

Advantages of Linked Lists over Arrays:
1. Linked lists have constant-time insertions and deletions for any position
    - pointers have to be changed, but that's it!
    - Arrays required O(n) time to do the same thing because all items have to
      be shifted over by 1 index after the point of insertion
2. Linked lists can continually expand as long as the machine has leftover space
    - Arrays must have their size specified in advance
    - Even in languages with dynamically resizing arrays, the operation to
      resize the array has a large cost for insertions

Disadvantages of Linked Lists:
1. Accessing or editing an item in a linked list takes O(i) time to walk the
list from the head to the ith item (unless you have a pointer to the item
you want already)
    - arrays have constant-time lookups and edits to an item with a given index

**doubly-linked lists** = a linked list with pointers to both the next and the
previous nodes

Example:
```python
class LinkedListNode:

    def __init__(self, value):
        self.value = value
        self.next = None
        self.previous = None

a = LinkedListNode(5)
b = LinkedListNode(1)
c = LinkedListNode(9)

a.next = b
b.previous = a

b.next = c
c.previous = b
```

This means we can traverse doubly-linked lists either forwards or backwards,
and that given any node's pointer, we can identify both its next and previous
node
