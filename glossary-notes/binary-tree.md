# Binary Tree Notes

**binary tree** = tree where each node has two or fewer children.  The children
of a binary tree are usually called `left` and `right`

```python
class BinaryTreeNode:

    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
```

When every level of the tree is completely full, the tree is "perfect"

Properties of binary trees:
1. Total number of nodes on each "level" doubles as you move down the tree
2. The number of nodes on the last level equals the sume of the number of nodes
on all other levels plus 1
