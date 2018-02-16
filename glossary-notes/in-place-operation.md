# In-place operation notes

**In-place** algorithms operate on the inputs to the algorithm directly,
changing the inputs as execution occurs, instead of returning a new object
  - this does not mean that new variables are not created, merely that a copy
    of the input is not created
  - as a general rule, in place operations take O(1) space in terms of
    additional variables

In-place algorithms can be a space savings, as generally the space cost is O(1)

In-place algorithms can cause side effects because the input is being changed,
which can affect code outside of the function

Out-of-place algorithms are usually safer because they inherently avoid side
effects.  Only in extreme situations of space constraints do in-place
algorithms really serve a purpose
