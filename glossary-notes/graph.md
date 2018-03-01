# Graph Notes

**graph** = data structure with nodes (vertices) connected by edges.  Graphs
are useful at representing things that connect to other things
- cities and highways
- routers and cables
- facebook users and their friendships

Two nodes connected by an edge are **adjacent** or **neighbors**

**degree** = number of edges connected to the node

**directed** graphs have edges that point from one node at one end to the node at the other end

**indegree** = number of nodes pointing to the current node of a directed graph

**outdegree** = number of nodes pointing out of the current node of a directed graph

**undirected** graphs have edges that simply connect the nodes at each end

**weighted** graphs have weights assigned to each edge, which may correspond to distance, cost, time, etc... between nodes

**cyclic** graphs have a cycle, where there is an unbroken set of nodes with no repeating nodes or edges that connects back to itself

A **loop** is an edge that connects a node to itself

## Ways of representing graphs ##
**Edge list**

```python
graph = [[0, 1], [1, 2], [1, 3], [2, 3]]
```

**Adjacency list**
List where the index represents the node and the value of the index is a list of the node's neighbors.  May also be a dictionary where the keys represent the node, and the values are lists of neighbors

```python
  graph = [
    [1],
    [0, 2, 3],
    [1, 3],
    [1, 2]
]
```

**Adjacency Matrix**
A matrix of 0s and 1s to indicate whether two nodes are connected

```python
  graph = [
    [0, 1, 0, 0],
    [1, 0, 1, 1],
    [0, 1, 0, 1],
    [0, 1, 1, 0]
]
```
