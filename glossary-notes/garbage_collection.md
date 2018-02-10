# Garbage Collection Notes

**garbae collector** = programming element that frees up unused memory automatically

2 strategies for garbage collection:
1. Tracing garbage collection (trace references from one object to the next)
2. Reference Count collection (have objects keep track of the number of things that reference them)

The C language has no garbage collection (memory must be manually freed up once no longer needed).  C++ has both manual and automatic garbage colleciton.
