export class Node {
  #x = -1;
  #y = -1;
  #fCost = -1;
  #gCost = -1;
  #hCost = -1;
  #boardDim = -1;

  #inOpenList = false;
  #inClosedList = false;
  #parentNode = null;

  #moveNeighbours = [];

  constructor(x, y, boardDim) {
    this.#x = x;
    this.#y = y;
    this.#boardDim = boardDim;
  }

  getCoords() {
    return {
      x: this.#x,
      y: this.#y
    };
  }

  getFCost() {
    return this.#fCost;
  }

  setFCost(value) {
    this.#fCost = value;
  }

  getGCost() {
    return this.#gCost;
  }

  setGCost(value) {
    this.#gCost = value;
  }

  getHCost() {
    return this.#hCost;
  }

  setHCost(value) {
    this.#hCost = value;
  }

  getInOpenList() {
    return this.#inOpenList;
  }

  setInOpenList(value) {
    this.#inOpenList = value;
  }

  getInClosedList() {
    return this.#inClosedList;
  }

  setInClosedList(value) {
    this.#inClosedList = value;
  }

  getParentNode() {
    return this.#parentNode;
  }

  setParentNode(node) {
    this.#parentNode = node;
  }

  getMoveNeighbours() {
    if (this.#moveNeighbours.length === 0) {
      this.#findMoveNeighbours();
    }

    return this.#moveNeighbours;
  }

  #findMoveNeighbours() {
    if (this.#x - 2 >= 0) {
      if (this.#y - 1 >= 0) {
        const neighbour = this.#board[x-2][y-1];
        neighbour.parentNode = node;
        moves.push(neighbour);
      }

      if (y + 1 < this.dimension) {
        const neighbour = this.#board[x-2][y+1];
        neighbour.parentNode = node;
        moves.push(neighbour);
      }
    }

    if (x + 2 < this.dimension) {
      if (y - 1 >= 0) {
        const neighbour = this.#board[x+2][y-1];
        neighbour.parentNode = node;
        moves.push(neighbour);
      }

      if (y + 1 < this.dimension) {
        const neighbour = this.#board[x+2][y+1];
        neighbour.parentNode = node;
        moves.push(neighbour);
      }
    }

    if (y - 2 >= 0) {
      if (x - 1 >= 0) {
        const neighbour = this.#board[x-1][y-2];
        neighbour.parentNode = node;
        moves.push(neighbour);
      }

      if (x + 1 < this.dimension) {
        const neighbour = this.#board[x+1][y-2];
        neighbour.parentNode = node;
        moves.push(neighbour);
      }
    }

    if (y + 2 < this.dimension) {
      if (x - 1 >= 0) {
        const neighbour = this.#board[x-1][y+2];
        neighbour.parentNode = node;
        moves.push(neighbour);
      }

      if (x + 1 < this.dimension) {
        const neighbour = this.#board[x+1][y+2];
        neighbour.parentNode = node;
        moves.push(neighbour);
      }
    }
  }

  reset() {
    this.#fCost = -1;
    this.#gCost = -1;
    this.#hCost = -1;
    this.#inOpenList = false;
    this.#inClosedList = false;
    this.#parentNode = null;
  }

  computeEuclideanDist(destNode) {
    let distX = Math.pow(Math.abs(this.x - destNode.x), 2);
    let distY = Math.pow(Math.abs(this.y - destNode.y), 2);
    return distX + distY;
  }
}