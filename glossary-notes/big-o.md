# Big O Notes

**How long does an algorithm take to run?**

A way of expressing runtime of an algorithm with respect to:
1. magnitude of growth
  - difficult to get an exact runtime, ie: speed of PC, other processes, lots of factors we can't measure or don't care about
2. compared to the input
  - b/c we don't measure an exact runtime, we need some measure instead of "seconds", so we use the size of the input
3. as the input gets "large"
  - usually we care about what happens when the input gets big.  Sometimes at small inputs, an algorithm may be "expensive", but most of the time we care how effective an algorithm is for large inputs


Common Big-O Cases:

**Constant Time *O(1)***
- only 1 step is required, regardless of how many items are in the input array

**Linear Time *O(n)***
- *n* steps are required for an input array of size *n*

**Quadratic Time *O(n^2)***
- *n^2* steps are required for an input array of size *n*
- think of this whenever you see two nested loops (inner and outer)
