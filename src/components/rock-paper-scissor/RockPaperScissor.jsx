// src/components/rock-paper-scissor/RockPaperScissor.jsx
import { useState } from 'react';
import './rock-paper-scissor.scss'; // Importa los estilos SCSS

const RockPaperScissor = ({ setActiveGame }) => {
  const [score, setScore] = useState({ player: 0, computer: 0 });
  const [showModal, setShowModal] = useState(false);
  const [result, setResult] = useState('');

  const gameRules = {
    rock: { defeats: ['scissors', 'lizard'] },
    paper: { defeats: ['rock', 'spock'] },
    scissors: { defeats: ['paper', 'lizard'] },
    lizard: { defeats: ['spock', 'paper'] },
    spock: { defeats: ['scissors', 'rock'] },
  };

  const playGame = (playerChoice) => {
    const choices = Object.keys(gameRules);
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    
    if (playerChoice === computerChoice) {
      setResult('Empate');
    } else if (gameRules[playerChoice].defeats.includes(computerChoice)) {
      setResult('Ganaste!');
      setScore((prevScore) => ({ ...prevScore, player: prevScore.player + 1 }));
    } else {
      setResult('Perdiste!');
      setScore((prevScore) => ({ ...prevScore, computer: prevScore.computer + 1 }));
    }

    setShowModal(true);
  };

  return (
    <div className="rps-body">
      <header className="rps-header">
        <div className="logo">Rock Paper Scissors</div>
        <div className="score">
          <div className="score__title">Score</div>
          <div className="score__points">{score.player} : {score.computer}</div>
        </div>
      </header>
      <div className="home-container">
        <div className="game-modes">
          {Object.keys(gameRules).map((choice) => (
            <div 
              key={choice}
              className={`game-modes__item game-item game-item--${choice}`} 
              onClick={() => playGame(choice)}
            >
              {choice.charAt(0).toUpperCase() + choice.slice(1)}
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <div className={`modal ${showModal ? 'modal--show' : ''}`}>
          <div className="modal-content">
            <h2>{result}</h2>
            <button onClick={() => setShowModal(false)}>Cerrar</button>
          </div>
        </div>
      )}

      <button className="button-rules" onClick={() => setActiveGame(null)}>
        Volver
      </button>
    </div>
  );
};

export default RockPaperScissor;
