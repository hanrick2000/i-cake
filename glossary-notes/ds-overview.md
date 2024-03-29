# Data Structures Overview

# Random Access Memory

**RAM** = random access memory = working memory where variables are stored
  - each area of memory has an address associated with it
  - each area of memory can store 8 bits (1 byte) of info

The computer processor is connected to a **memory controller** that has direct
links to each byte of memory
- the direct connection to each byte is why we are able to randomly access
any point of memory as we desire without having to incrementally traverse the
entire set of RAM
- in contrast, spinning hard drives require a reader (a head) that has to
physically move along the disk to read from memory, thus slower
- even though the memory controller can read from random addresses quickly,
programs tend to use memory that is close in location, so there's a speed boost

The computer processor also has a **cache** of memory where a copy of recently
read RAM is kept.  (actually a series of caches)
- Cached memory is even faster to read from, saving more time compared to going
out to the RAM
- When the processor looks up a specific address in memory, the memory controller
also returns nearby memory and the processor caches it
- reading from sequential memory address is faster than skipping around

# Binary Numbers

# Fixed-Width Integers

# Arrays

# Strings
**strings** = series of characters

Arrays can store characters instead of numbers via encoding.  Strings are arrays
of 8-bit characters

# Pointers

# Dynamic Arrays

# Linked Lists

# Hash Tables

# Summary
