import { Node } from "./node.js";
import { AStar } from "./astar.js";

export class Board {
  #board = [];
  #aStar = new AStar();
  
  constructor(len=8) {
    this.#board = Array.from({length: len}, (indexX) => 
      Array.from(
        {length: len}, (indexY) => new Node(indexX, indexY, len)
      )
    );
  }

  #getNode(posX, posY) {
    if (posX < 0 || posX >= this.#board.length)
      return null;

    if (posY < 0 || posY >= this.#board.length)
      return null;

    return this.#board[posX][posY];
  }

  knightMoves(start, dest) {
    const moves = [];
    const startNode = this.#getNode(start[0], start[1]);
    const destNode = this.#getNode(dest[0], dest[1]);

    if (!startNode || !destNode) {
      console.error("Invalid coordinates!");
      return;
    }
    
    if (!this.#aStar.computeOptimalPath(startNode, destNode, moves)) {
      console.log("No optimal moves found.");
      return;
    }
    
    console.log(`You made it in ${moves.length} moves! Here's your path:`);
    moves.forEach((coords) => {
      console.log(coords);
    });
  }
}