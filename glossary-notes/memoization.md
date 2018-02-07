# Memoization Notes

**Memoization** = a way of keeping track of previously computed method results so that the method does not need to recalculate them.  Results usually stored in a hash with the method inputs as a key

Where a standard recursive Fibonacci number generator will duplicate many calls to recalculate previous Fibonacci numbers, a memoized version will not:

```python
class Fibber:

    def __init__(self):
        self.memo = {}

    def fib(self, n):

        if n < 0:
            raise Exception('Index negative')

        # base cases
        elif n in [0, 1]:
            return n

        if n in self.memo:
            print "grabbing memo[%i]" % n
            return self.memo[n]

        print "computing fib(%i)" % n
        result = self.fib(n - 1) + self.fib(n - 2)

        # memoize
        self.memo[n] = result

        return result
```

Memoization is commonly used in dynamic programming, since the solution is composed of solutions to subproblems
