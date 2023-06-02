/* 

-A graph is a non-linear data structure consisting of a collection of nodes (vertices) and edges that
connect pairs of nodes. Graphs are widely used to represent relationships between objects or
entities. Here's an explanation of the two common representations of graphs: adjacency list
and adjacency matrix.

1/ Adjacency List:
-In the adjacency list representation, each vertex in the graph is associated with a list of its
neighboring vertices. This is typically implemented using an object or a hash table where the
keys represent the vertices, and the values are arrays or linked lists representing the adjacent
vertices. This representation is efficient for sparse graphs (where the number of edges is
significantly less than the maximum possible edges) because it only requires memory proportional
to the number of edges.

2/ Adjacency Matrix:
-In the adjacency matrix representation, a 2-dimensional matrix is used to represent the graph.
The rows and columns of the matrix represent the vertices, and the values at each position indicate
whether there is an edge between two vertices. Typically, a value of 1 indicates an edge,
and a value of 0 indicates no edge. This representation is useful for dense graphs
(where the number of edges is close to the maximum possible edges) because it provides
constant-time access to determine if there is an edge between two vertices.

-Both representations have their advantages and disadvantages. The adjacency list is generally
more space-efficient for sparse graphs, while the adjacency matrix is more space-efficient for
dense graphs. The choice of representation depends on the specific use case and the operations
that need to be performed on the graph (e.g., finding adjacent vertices, checking if an edge
exists, etc.).

Graphs can be used to model various real-world scenarios, such as social networks,
computer networks, transportation networks, and more. They can be traversed using
algorithms like Depth-First Search (DFS) or Breadth-First Search (BFS) to visit and explore
the vertices and edges of the graph.

Note: The code provided earlier demonstrates how to implement these graph representations
in JavaScript, allowing you to create and manipulate graphs using either an adjacency list
or an adjacency matrix.

*/
