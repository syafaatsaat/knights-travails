export class Node {
  #x = -1;
  #y = -1;
  #f = -1;
  #g = -1;
  #h = -1;
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
    return this.#f;
  }

  setFCost(value) {
    this.#f = value;
  }

  getGCost() {
    return this.#g;
  }

  setGCost(value) {
    this.#g = value;
  }

  getHCost() {
    return this.#h;
  }

  setHCost(value) {
    this.#h = value;
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
    this.#f = -1;
    this.#g = -1;
    this.#h = -1;
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

export class AStar {
  #openList = [];
  #closedList = [];
  
  constructor() {}

  #pushToOpenList(node) {
    this.#openList.push(node);
    openArr.sort((a, b) => a.f - b.f);
    node.setInOpenList(true);
  }

  #shiftFromOpenList() {
    const node = this.#openList.shift();
    node.setInOpenList(false);
    return node;
  }

  #reset() {
    this.#openList.forEach((node) => node.reset());
    this.#closedList.forEach((node) => node.reset());

    this.#openList = [];
    this.#closedList = [];
  }

  
}