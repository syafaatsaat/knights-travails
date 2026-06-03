import { Node, AStar } from "./astar.js";

export class Board {
  #board = [];
  #aStar = new AStar();
  
  constructor(len=8) {
    this.dimension = len;
    this.#board = Array.from({length: len}, (indexX) => 
      Array.from({length: len}, (indexY) => new Node(indexX, indexY))
    );
  }

  #aStarSearch(startNode, destNode) {
    const openArr = [];
    const closedArr = [];
    openArr.push(startNode);

    while (openArr.length > 0) {
      openArr.sort((a, b) => a.f - b.f);
      const currNode = openArr.shift();

      // generate 8 successors and set their parents to q
      const successors = this.#findPossibleMoves(currNode);
      // foreach successor
      successors.forEach((succ) => {
        // if succ === dest, stop search
        // else
            // succ.g = q.g + dist between succ and q
            // succ.h = dist from dest to succ / use euclidean heuristics
            // succ.f = succ.g + succ.h
        if (succ === destNode)
          break;
        
        succ.g = currNode.g + succ.computeEuclideanDist(currNode);
        succ.h = succ.computeEuclideanDist(destNode);
        
        // if succ already exists in open list and that succ.f is lower, skip
        if (openArr.includes(succ) && succ.f < succ.g + succ.h)
          continue;
        
        // if succ already exists in closed list and that succ.f is lower, skip
        if (closedArr.includes(succ) && succ.f < succ.g + succ.h)
          continue;
        
        openArr.push(succ);
      })
          
    
      closedArr.push(currNode);
    }

    return closedArr;
  }

  knightMoves(start, dest) {

  }
}