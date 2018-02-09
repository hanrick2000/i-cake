# Bottom up algorithms notes

Where recursive algorithms usually start at the end and work backwards, working from the *bottom-up* is a way to avoid recursion and the memory cost that occurs when the call stack is built up.  This avoids stack overflow errors where the call stack gets too large.

This technique is often used in dynamic programming.

Top down example:
```python
def product_1_to_n(n):
    return n * product_1_to_n(n-1) if n > 1 else 1
```

Bottom Up example:
```python
def product_1_to_n(n):

    result = 1
    for num in range(1, n+1):
        result *= num

    return result
```
