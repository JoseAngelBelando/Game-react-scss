// src/components/hangman/Hangman.jsx

import { useState } from 'react';
import {
  HangmanContainer,
  Title,
  WordDisplay,
  InputContainer,
  Message,
  IncorrectGuesses,
  BackButton,
} from './hangman.styles';

function Hangman({ setActiveGame }) {
  const [word] = useState("REACT");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [incorrectGuesses, setIncorrectGuesses] = useState([]);
  const [inputLetter, setInputLetter] = useState('');
  const maxAttempts = 6;

  const handleGuess = () => {
    if (!inputLetter) return;

    const letter = inputLetter.toUpperCase();

    if (guessedLetters.includes(letter) || incorrectGuesses.includes(letter)) {
      alert("Ya intentaste esa letra");
      return;
    }

    if (word.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter]);
    } else {
      setIncorrectGuesses([...incorrectGuesses, letter]);
    }

    setInputLetter('');
  };

  const displayWord = word
    .split('')
    .map((letter) => (guessedLetters.includes(letter) ? letter : '_'))
    .join(' ');

  const isGameOver = incorrectGuesses.length >= maxAttempts;
  const isGameWon = word.split('').every((letter) => guessedLetters.includes(letter));

  return (
    <HangmanContainer>
      <Title>Hangman</Title>
      <WordDisplay>{displayWord}</WordDisplay>
      {!isGameOver && !isGameWon && (
        <InputContainer>
          <input
            className="h-input"
            type="text"
            value={inputLetter}
            onChange={(e) => setInputLetter(e.target.value.toUpperCase())}
            maxLength="1"
          />
          <button className="h-button" onClick={handleGuess}>
            Adivinar
          </button>
        </InputContainer>
      )}
      <Message>
        {isGameWon && <p>¡Felicidades! Ganaste.</p>}
        {isGameOver && <p>Lo siento, has perdido. La palabra era: {word}</p>}
      </Message>
      <IncorrectGuesses>
        <p>Intentos incorrectos: {incorrectGuesses.join(', ')}</p>
        <p>Te quedan {maxAttempts - incorrectGuesses.length} intentos</p>
      </IncorrectGuesses>
      <BackButton onClick={() => setActiveGame(null)}>Volver al Inicio</BackButton>
    </HangmanContainer>
  );
}

export default Hangman;
