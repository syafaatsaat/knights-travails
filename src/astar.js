import { Node } from "./node.js";

export class AStar {
  #openList = [];
  #closedList = [];
  #board;
  
  constructor(board) {
    this.#board = board;
  }

  #pushToOpenList(node) {
    this.#openList.push(node);
    node.setInOpenList(true);
  }

  #shiftFromOpenList() {
    this.#openList.sort((a, b) => a.f - b.f);
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

  #createPath(node, path) {
    let parentNode = node.getParentNode();
    path.push(node);

    while (parentNode != null) {
      path.push(parentNode);
      parentNode = parentNode.getParentNode();
    }
  }

  #findPath(startNode, destNode, path) {
    let fCost = 0;
    let gCost = 0;
    let hCost = 0;

    this.#pushToOpenList(startNode);

    while (this.#openList.length > 0) {
      const currNode = this.#shiftFromOpenList();
      
      this.#closedList.push(currNode);
      currNode.setInClosedList(true);

      if (currNode === destNode) {
        this.#createPath(currNode, path);
        return true;
      }
      
      const moveNeighbours = currNode.getMoveNeighbours(this.#board);
      moveNeighbours.forEach((neighbourNode) => {
        gCost = currNode.getGCost() + 
          neighbourNode.computeEuclideanDist(currNode);
        
        if ((neighbourNode.getInOpenList() || neighbourNode.getInClosedList()) 
          && neighbourNode.getGCost() < gCost) 
        {
          return;
        }

        neighbourNode.setParentNode(currNode);
        neighbourNode.setGCost(gCost);

        hCost = neighbourNode.computeEuclideanDist(destNode);
        neighbourNode.setHCost(hCost);

        fCost = gCost + hCost;
        neighbourNode.setFCost(fCost);
        
        if (neighbourNode.getInClosedList())
          neighbourNode.setInClosedList(false);

        if (!neighbourNode.getInOpenList())
          this.#pushToOpenList(neighbourNode);
      });
    }

    return false;
  }

  computeOptimalPath(startNode, destNode, pathArray) {
    const nodePath = [];

    const foundPath = this.#findPath(startNode, destNode, nodePath);

    this.#reset();

    if (!foundPath)
      return false;

    nodePath.forEach((node) => {
      pathArray.unshift(node);
    });

    return true;
  }
}