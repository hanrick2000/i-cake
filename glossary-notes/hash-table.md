# Hash Tables

**Hash Tables** = a data structure mapping keys to values.  May also be called
a hash, hash map, map, unordered map, or dictionary

Some common things about them:
1. Take on average O(1) time for insertions and lookups
2. Are unordered (keys not guaranteed to stay in a certain order)
3. Can use various types of objects as keys (usually strings)

Hash tables are like arrays, where the indices are the keys
  - usually hash tables are built on top of arrays
  - if your keys are sequential integers, you can probably save time and space
    by using an array instead

Due to hash collisions / rebalancing, insertion and lookup cost can be as bad
as O(n) in the worst case, but usually we assume hashing and resizing is smart
enough to keep collisions rare and cheap
