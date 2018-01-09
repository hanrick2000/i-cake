# Big O Notes

**How long does an algorithm take to run?**

A way of expressing runtime of an algorithm with respect to:
1. **magnitude of growth**
  - difficult to get an exact runtime, ie: speed of PC, other processes, lots of factors we can't measure or don't care about
2. **compared to the input**
  - b/c we don't measure an exact runtime, we need some measure instead of "seconds", so we use the size of the input
3. **as the input gets "large"**
  - usually we care about what happens when the input gets big.  Sometimes at small inputs, an algorithm may be "expensive", but most of the time we care how effective an algorithm is for large inputs


## Common Big-O Cases

**Constant Time *O(1)***
- only 1 step is required, regardless of how many items are in the input array

**Linear Time *O(n)***
- *n* steps are required for an input array of size *n*

**Quadratic Time *O(n^2)***
- *n^2* steps are required for an input array of size *n*
- think of this whenever you see two nested loops (inner and outer)

## Simplifications
**Constants get dropped**

*O(2n)* => *O(n)* because as n gets large, the effect of the constant's magnitude gets wiped out by the effect of n increasing in size

**Less significant terms get dropped**

*O(n^4 + 2*n^3 + 3*n^2 + 4*n + 7)* => *O(n^4)* because as n gets large, the effect of the largest term swamps the effects of any smaller terms

## Worst Case is Usually Implied
But sometimes it's worth mentioning a difference between the worst-case and best-case or average-case runtimes, if they're significant

## Variant - Space Complexity
At times, rather than caring about time, we look at memory usage instead.

This looks at total memory usage compared to input size of any additional variables being allocated.

Usually the space taken up by the inputs is not considered, only space from outputs and intermediates.

**Often there's a tradeoff between space and time considerations!**

## Warnings
Try to consider Big-O when designing algorithms, but be careful:

1. Sometimes the constants (that big-O ignores) actually matter in the real world
2. Sometimes prematurely optimizing is not worth it.  Shipping code quickly can be better than shipping the most efficient space/time version (need to strike a balance)
