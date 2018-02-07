# Overlapping Subproblems Notes

**Overlapping subproblems** = subset of problems in which the solution involves repeatedly solving the same subproblems

Common example is the Fibonacci sequence, when defined recursively.

```python
def fib(n):
    if n in [0, 1]:
        return n
    return fib(n-1) + fib(n-2)
```

`fib(n-1)` and `fib(n-2)` are subproblems of `fib(n)`
