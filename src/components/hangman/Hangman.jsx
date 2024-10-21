// src/components/hangman/Hangman.jsx


import { HangmanContainer } from './Hangman.styles'; // Asegúrate de que este archivo esté en la misma carpeta.

const Hangman = () => {
  return (
    <HangmanContainer>
      <div className="h-post"></div>
      <div className="h-beam"></div>
      <div className="h-rope"></div>
      <div className="h-head"></div>
      <div className="h-body"></div>
      <div className="h-left-arm"></div>
      <div className="h-right-arm"></div>
      <div className="h-left-leg"></div>
      <div className="h-right-leg"></div>
    </HangmanContainer>
  );
};

export default Hangman;
