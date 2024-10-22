// src/components/drawin-board/DrawinBoard.jsx

import { BoardContainer, BoardCell } from './drawinTicTacToe.styles';

const DrawinBoard = () => {
  // Puedes ajustar esto para tener diferentes valores en las celdas
  const cells = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X'];

  return (
    <BoardContainer>
      {cells.map((cell, index) => (
        <BoardCell key={index}>{cell}</BoardCell>
      ))}
    </BoardContainer>
  );
};

export default DrawinBoard;
