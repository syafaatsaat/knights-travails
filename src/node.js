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

  getX() {
    return this.#x;
  }

  getY() {
    return this.#y;
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

  getMoveNeighbours(board) {
    if (this.#moveNeighbours.length === 0) {
      this.#findMoveNeighbours(board);
    }

    return this.#moveNeighbours;
  }

  #findMoveNeighbours(board) {
    if (this.#x - 2 >= 0) {
      if (this.#y - 1 >= 0) {
        const neighbour = board[this.#x-2][this.#y-1];
        this.#moveNeighbours.push(neighbour);
      }

      if (this.#y + 1 < this.#boardDim) {
        const neighbour = board[this.#x-2][this.#y+1];
        this.#moveNeighbours.push(neighbour);
      }
    }

    if (this.#x + 2 < this.#boardDim) {
      if (this.#y - 1 >= 0) {
        const neighbour = board[this.#x+2][this.#y-1];
        this.#moveNeighbours.push(neighbour);
      }

      if (this.#y + 1 < this.#boardDim) {
        const neighbour = board[this.#x+2][this.#y+1];
        this.#moveNeighbours.push(neighbour);
      }
    }

    if (this.#y - 2 >= 0) {
      if (this.#x - 1 >= 0) {
        const neighbour = board[this.#x-1][this.#y-2];
        this.#moveNeighbours.push(neighbour);
      }

      if (this.#x + 1 < this.#boardDim) {
        const neighbour = board[this.#x+1][this.#y-2];
        this.#moveNeighbours.push(neighbour);
      }
    }

    if (this.#y + 2 < this.#boardDim) {
      if (this.#x - 1 >= 0) {
        const neighbour = board[this.#x-1][this.#y+2];
        this.#moveNeighbours.push(neighbour);
      }

      if (this.#x + 1 < this.#boardDim) {
        const neighbour = board[this.#x+1][this.#y+2];
        this.#moveNeighbours.push(neighbour);
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
    let distX = Math.pow(Math.abs(this.#x - destNode.getX()), 2);
    let distY = Math.pow(Math.abs(this.#y - destNode.getY()), 2);
    return distX + distY;
  }
}