// src/App.jsx

import './scss/index.scss';
import './scss/drawins.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importa Routes y Route
import Hangman from './components/hangman/Hangman';
import TicTacToe from './components/tic-tac-toe/TicTacToe';
import MemoryCuple from './components/memory-cuples/MemoryCuple';
import RockPaperScissor from './components/rock-paper-scissor/RockPaperScissor';

import Button from './components/button/Button'; // Importa el nuevo componente
import { useState } from 'react';

function App() {
  const [activeGame, setActiveGame] = useState(null);

  const renderGame = () => {
    switch (activeGame) {
      case 'hangman':
        return <Hangman setActiveGame={setActiveGame} />;
      case 'tic-tac-toe':
        return <TicTacToe setActiveGame={setActiveGame} />;
      case 'memory-cuples':
        return <MemoryCuple setActiveGame={setActiveGame} />;
      case 'rock-paper-scissor':
        return <RockPaperScissor setActiveGame={setActiveGame} />;
      default:
        return null;
    }
  };

  return (
    <Router>
      <div>
        <header className="header">
          <div className="container">
            <h1 className="title">
              Jose <span className="game">Game</span>
            </h1>
          </div>
        </header>

        <div className="content">
          <Routes>
            {/* Rutas para las diferentes páginas */}
            <Route path="/" element={
              activeGame ? (
                <div>{renderGame()}</div>
              ) : (
                <div className="game-links">
                  <Button onClick={() => setActiveGame('hangman')}>Hangman</Button>
                  <Button onClick={() => setActiveGame('tic-tac-toe')}>Tic-Tac-Toe</Button>
                  <Button onClick={() => setActiveGame('memory-cuples')}>Memory Cuples</Button>
                  <Button onClick={() => setActiveGame('rock-paper-scissor')}>Rock Paper Scissor</Button>
                  <Button onClick={() => setActiveGame('bingo')}>Bingo</Button>
                </div>
              )
            } />
           
          </Routes>
        </div>

        <footer className="footer">
          <p className="made">
            Made with * by{' '}
            <a className="name" href="https://github.com/JoseAngelBelando" target="_blank" rel="noopener noreferrer">
              José Angel
            </a>{' '}
            -{' '}
            <a className="repository" href="https://github.com/JoseAngelBelando/games" target="_blank" rel="noopener noreferrer">
              Repository
            </a>
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
