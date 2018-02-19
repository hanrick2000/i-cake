# Arrays

**arrays** = data structure to hold an ordered collection of elements.  Each
element in an array has an index to indicate its position, starting at 0.

Some languages require arrays to have a size specified when they are first
created.  In memory, arrays are stored as contiguous spaces of memory such that enough memory is allocated to hold an array of that size

Arrays are efficient at finding elements by their index, because the address of
where an array is located in memory is known.  This allows for O(1) lookup time

Dynamic arrays do not require their length to be known when created, which
allows for items to be inserted and deleted at any index (though there may
be time and space costs).  In Python, dynamic arrays are called lists.

Strings are almost always implemented as arrays of characters
