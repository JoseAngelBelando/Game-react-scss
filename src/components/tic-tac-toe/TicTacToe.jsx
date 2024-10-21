import { useState, useEffect } from 'react';
import { TicTacToeContainer, Board, Row, Square, Button } from './ticTacToe.styles';

const TicTacToe = ({ setActiveGame }) => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const winner = calculateWinner(board);

  useEffect(() => {
    if (!isXNext && !winner) {
      const cpuMove = getCPUMove(board);
      if (cpuMove !== -1) {
        makeMove(cpuMove, 'O');
      }
    }
  }, );

  const handleClick = (index) => {
    if (winner || board[index] || !isXNext) return;
    makeMove(index, 'X');
  };

  const makeMove = (index, player) => {
    const newBoard = board.slice();
    newBoard[index] = player;
    setBoard(newBoard);
    setIsXNext(player === 'X' ? false : true);
  };

  const getCPUMove = (board) => {
    const emptyIndices = board
      .map((value, index) => (value === null ? index : null))
      .filter((index) => index !== null);
    return emptyIndices.length > 0 ? emptyIndices[0] : -1;
  };

  const renderSquare = (index) => (
    <Square onClick={() => handleClick(index)}>
      {board[index]}
    </Square>
  );

  return (
    <TicTacToeContainer>
      <h2 style={{ color: winner ? 'green' : 'black' }}>
        {winner ? `Winner: ${winner}` : `Next Player: ${isXNext ? 'X' : 'O (CPU)'}`}
      </h2>
      <Board>
        <Row>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </Row>
        <Row>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </Row>
        <Row>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </Row>
      </Board>
      <Button onClick={() => {
        setBoard(Array(9).fill(null));
        setIsXNext(true);
      }}>
        Restart
      </Button>
      <Button onClick={() => setActiveGame(null)}>
        Back to Menu
      </Button>
    </TicTacToeContainer>
  );
};

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export default TicTacToe;