# Logarithm Notes

**Given a base, what power must I raise it to to get the answer I'm looking for?**

ie: `10^x = 100`, solve for x

`log10(100) = 2` because `10^2 = 100`

Logarithms give us a way to solve for exponents.

## Rules of Logarithms

**Simplification**

`log_a( a^x ) = x` (pull variables down from exponents)

**Multiplication**

`log_a( x * y ) = log_a(x) + log_a(y)`

**Division**

`log_a( x / y ) = log_a(x) - log_a(y)`

**Powers**

`log_a( x^y ) = y * log_a(x)` (peel-off rule)

**Changing Bases**
`log_a(x) = log_b(x) / log_b(a)` (change from base a to base b)


## Why do we care for problem solving?
- How many times must we double *1* before we get to *n*?
  - Answer: `log2(n)`
- How many times must we divide *n* in half before we get down to *1*?
  - Answer: `log2(n)`

## Example: Binary Search
The time cost of binary search deals with logarithms

Binary Search Algorithm:
- Want to find a specific number in a sorted array
1. Start with the middle number in the array.  Is it bigger or smaller than the number we want? The number we want will either be in the lower or upper half of the array
2. Problem is now half as big
3. Continue, dividing problem in half each time until the number is found or the entire array has been searched

Big O for binary search: `O(log_2(n))`


## Sorting in General
The best worst-case runtime for sorts in general is `O(n*log_2(n))` for **comparison-based sorting**.  Hashmaps can sort in `O(n)` time for arrays with a tightly-bound range of numbers via **counting sort**.
