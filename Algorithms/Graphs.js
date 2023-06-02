// Adjacency List:

class Graph {
    constructor() {
      this.vertices = {};
    }
  
    addVertex(vertex) {
      this.vertices[vertex] = [];
    }
  
    addEdge(vertex1, vertex2) {
      this.vertices[vertex1].push(vertex2);
      this.vertices[vertex2].push(vertex1);
    }
  
    removeVertex(vertex) {
      while (this.vertices[vertex].length) {
        const adjacentVertex = this.vertices[vertex].pop();
        this.removeEdge(adjacentVertex, vertex);
      }
      delete this.vertices[vertex];
    }
  
    removeEdge(vertex1, vertex2) {
      this.vertices[vertex1] = this.vertices[vertex1].filter(
        (v) => v !== vertex2
      );
      this.vertices[vertex2] = this.vertices[vertex2].filter(
        (v) => v !== vertex1
      );
    }
  
    printGraph() {
      const vertices = Object.keys(this.vertices);
      for (let vertex of vertices) {
        const adjacentVertices = this.vertices[vertex].join(", ");
        console.log(`${vertex} -> ${adjacentVertices}`);
      }
    }
  }
  
  // Adjacency Matrix:
  
  class Graph {
    constructor(numVertices) {
      this.numVertices = numVertices;
      this.matrix = [];
      for (let i = 0; i < numVertices; i++) {
        this.matrix[i] = [];
        for (let j = 0; j < numVertices; j++) {
          this.matrix[i][j] = 0;
        }
      }
    }
  
    addEdge(source, destination) {
      this.matrix[source][destination] = 1;
      this.matrix[destination][source] = 1;
    }
  
    removeEdge(source, destination) {
      this.matrix[source][destination] = 0;
      this.matrix[destination][source] = 0;
    }
  
    printGraph() {
      for (let i = 0; i < this.numVertices; i++) {
        const adjacentVertices = [];
        for (let j = 0; j < this.numVertices; j++) {
          if (this.matrix[i][j] === 1) {
            adjacentVertices.push(j);
          }
        }
        console.log(`${i} -> ${adjacentVertices.join(", ")}`);
      }
    }
  }