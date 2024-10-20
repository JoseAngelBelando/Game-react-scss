// src/components/AdvancedMode.jsx
import { useState } from 'react';
import './scss/styles.scss'; // Asegúrate de que la ruta sea correcta

const AdvancedMode = () => {
  const [userScore, setUserScore] = useState(0);
  const [pcScore, setPcScore] = useState(0);
  const [userChoice, setUserChoice] = useState(null);
  const [pcChoice, setPcChoice] = useState(null);
  const [result, setResult] = useState('');
  const [showResults, setShowResults] = useState(false);

  const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

  const handleUserChoice = (choice) => {
    setUserChoice(choice);
    const pcRandomChoice = choices[Math.floor(Math.random() * choices.length)];
    setPcChoice(pcRandomChoice);
    determineWinner(choice, pcRandomChoice);
    setShowResults(true);
  };

  const determineWinner = (user, pc) => {
    if (user === pc) {
      setResult("It's a draw!");
    } else if (
      (user === 'rock' && (pc === 'scissors' || pc === 'lizard')) ||
      (user === 'paper' && (pc === 'rock' || pc === 'spock')) ||
      (user === 'scissors' && (pc === 'paper' || pc === 'lizard')) ||
      (user === 'lizard' && (pc === 'spock' || pc === 'paper')) ||
      (user === 'spock' && (pc === 'scissors' || pc === 'rock'))
    ) {
      setResult('YOU WIN!');
      setUserScore(userScore + 1);
    } else {
      setResult('YOU LOSE!');
      setPcScore(pcScore + 1);
    }
  };

  const playAgain = () => {
    setShowResults(false);
    setUserChoice(null);
    setPcChoice(null);
    setResult('');
  };

  return (
    <div className="rps-body" data-mode="advanced">
      <header className="rps-header">
        <div className="score">
          <span className="score__title">YOU</span>
          <span id="points-user" className="score__points">{userScore}</span>
        </div>
        <div className="logo logo--advanced">
          <span className="block">ROCK</span>
          <span className="block">PAPER</span>
          <span className="block">SCISSORS</span>
          <span className="block">LIZARD</span>
          <span className="block">SPOCK</span>
        </div>
        <div className="score">
          <span className="score__title">PC</span>
          <span id="points-pc" className="score__points">{pcScore}</span>
        </div>
      </header>
      <main>
        <div id="game-items" className="game-items game-items--advanced">
          {choices.map((choice) => (
            <div
              key={choice}
              className={`game-item game-item--${choice} game-item--${choice}-advanced`}
              data-item={choice}
              onClick={() => handleUserChoice(choice)}
            >
              <img
                src={`./assets/images/icon-${choice}.svg`}
                className="game-item__image"
                alt={`icon ${choice}`}
              />
            </div>
          ))}
        </div>

        {showResults && (
          <div id="game-results" className="game-results">
            <div>
              <h2>Your Picked</h2>
              <div className="game-item game-item--result">
                <img id="picked-user-image" src={`./assets/images/icon-${userChoice}.svg`} alt={userChoice} />
              </div>
            </div>
            <div>
              <h2 id="game-result">{result}</h2>
              <button id="play-again" onClick={playAgain}>PLAY AGAIN</button>
            </div>
            <div>
              <h2>PC Picked</h2>
              <div className="game-item game-item--result">
                <img id="picked-pc-image" src={`./assets/images/icon-${pcChoice}.svg`} alt={pcChoice} />
              </div>
            </div>
          </div>
        )}
      </main>
      <button id="button-rules" className="button-rules">RULES</button>
      <div id="modal" className="modal">
        <img src="./assets/images/image-rules-bonus.svg" alt="game rules" />
      </div>
    </div>
  );
};

export default AdvancedMode;