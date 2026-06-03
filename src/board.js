import { Node } from "./node.js";
import { AStar } from "./astar.js";

export class Board {
  #board = [];
  #aStar = new AStar();
  
  constructor(len=8) {
    this.dimension = len;
    this.#board = Array.from({length: len}, (indexX) => 
      Array.from(
        {length: len}, (indexY) => new Node(indexX, indexY, len)
      )
    );
  }

  knightMoves(start, dest) {

  }
}