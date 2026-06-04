import "./styles.css";
import { Board } from "./board.js";

const chessBoard = new Board();
chessBoard.knightMoves([3,3], [4,3]);
chessBoard.knightMoves([0,0], [3,3]);
chessBoard.knightMoves([3,3], [0,0]);
chessBoard.knightMoves([0,0], [7,7]);
