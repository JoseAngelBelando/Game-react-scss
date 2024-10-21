// src/components/Hangman/Hangman.jsx

import  { useState, useEffect } from 'react';
import {
  HangmanContainer,
  Title,
  WordDisplay,
  Input,
  Button,
  Message
} from './hangman.styles';

const words = ['javascript', 'programacion', 'html', 'css', 'computadora'];
const selectedWord = words[Math.floor(Math.random() * words.length)];

const Hangman = () => {
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [attempts, setAttempts] = useState(6);
  const [message, setMessage] = useState('');
  const [inputValue, setInputValue] = useState('');

  // Función para mostrar la palabra oculta
  const displayWord = () => {
    return selectedWord
      .split('')
      .map((letter) => (guessedLetters.includes(letter) ? letter : '_'))
      .join(' ');
  };

  // Función para procesar la letra adivinada
  const guessLetter = () => {
    const letter = inputValue.toLowerCase();
    setInputValue(''); // Limpia el campo de entrada.

    if (!letter || guessedLetters.includes(letter) || attempts === 0) {
      return; // Sale de la función si la letra no es válida, ya fue adivinada o no hay intentos restantes.
    }

    if (selectedWord.includes(letter)) {
      setGuessedLetters((prev) => [...prev, letter]); // Agrega la letra adivinada a la lista.
      if (!displayWord().includes('_')) {
        setMessage('¡Ganaste!'); // Mensaje de victoria.
      }
    } else {
      setAttempts((prev) => prev - 1); // Resta un intento.
      if (attempts === 1) {
        setMessage(`Perdiste. La palabra era: ${selectedWord}`); // Mensaje de derrota.
      } else {
        setMessage(`Intentos restantes: ${attempts - 1}`); // Muestra intentos restantes.
      }
    }
  };

  useEffect(() => {
    // Alerta al perder
    if (attempts === 0) {
      setMessage(`Perdiste. La palabra era: ${selectedWord}`);
    }
  }, [attempts]);

  return (
    <HangmanContainer>
      <Title>Juego del Ahorcado</Title>
      <WordDisplay>{displayWord()}</WordDisplay>
      <Input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        maxLength="1"
      />
      <Button onClick={guessLetter}>Adivinar</Button>
      <Message>{message}</Message>
    </HangmanContainer>
  );
};

export default Hangman;
