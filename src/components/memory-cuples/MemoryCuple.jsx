
import { useEffect, useState } from 'react';
import {
  MemoryCupleContainer,
  Title,
  GameBoard,
  Card,
  Message,
  RestartButton,
  BackButton,
} from './memoryCuple.styles'; // Importar los estilos

const cards = [
  { id: 1, value: 'A' },
  { id: 2, value: 'A' },
  { id: 3, value: 'B' },
  { id: 4, value: 'B' },
  { id: 5, value: 'C' },
  { id: 6, value: 'C' },
  { id: 7, value: 'D' },
  { id: 8, value: 'D' },
  { id: 9, value: 'E' },
  { id: 10, value: 'E' },
  { id: 11, value: 'F' },
  { id: 12, value: 'F' }
];

const MemoryCuple = ({ setActiveGame }) => {
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [attempts, setAttempts] = useState(0);
  const maxAttempts = 10;
  const [message, setMessage] = useState('');
  const [shuffledCards, setShuffledCards] = useState([]);

  useEffect(() => {
    createBoard();
  },[]); // Se debe incluir un array vacío para evitar el bucle infinito

  const shuffle = (array) => array.sort(() => Math.random() - 0.5);

  const createBoard = () => {
    setFlippedCards([]);
    setMatchedCards([]);
    setAttempts(0);
    setMessage('');
    setShuffledCards(shuffle([...cards]));
  };

  const flipCard = (index) => {
    if (flippedCards.length >= 2 || flippedCards.includes(index)) return;

    setFlippedCards((prev) => [...prev, index]);

    if (flippedCards.length === 1) {
      checkForMatch(index);
    }
  };

  const checkForMatch = (index) => {
    setAttempts(attempts + 1);
    const firstCardIndex = flippedCards[0];

    if (shuffledCards[firstCardIndex].value === shuffledCards[index].value) {
      setMatchedCards((prev) => [...prev, shuffledCards[firstCardIndex].value]);
      if (matchedCards.length + 1 === cards.length / 2) {
        setMessage('¡Has ganado!');
      }
    } else {
      if (attempts + 1 >= maxAttempts) {
        setMessage('Game Over');
      }
    }

    setTimeout(() => {
      resetBoard();
    }, 1000);
  };

  const resetBoard = () => {
    setFlippedCards([]);
  };

  const restartGame = () => {
    createBoard();
  };

  return (
    <MemoryCupleContainer>
      <Title>Memory Cuples</Title>
      <GameBoard>
        {shuffledCards.map((card, index) => (
          <Card
            key={index}
            className={`${flippedCards.includes(index) || matchedCards.includes(card.value) ? 'flip' : ''}`}
            onClick={() => flipCard(index)}
          >
            {(flippedCards.includes(index) || matchedCards.includes(card.value)) ? card.value : '?'}
          </Card>
        ))}
      </GameBoard>
      {message && <Message>{message}</Message>}
      <div className="controls">
        <RestartButton onClick={restartGame}>Reiniciar</RestartButton>
        <BackButton onClick={() => setActiveGame(null)}>Volver al Inicio</BackButton>
      </div>
      <div>Intentos: {attempts}/{maxAttempts}</div>
    </MemoryCupleContainer>
  );
};

export default MemoryCuple;
