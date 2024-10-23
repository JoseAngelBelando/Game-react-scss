import './scss/index.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import TicTacToe from './components/tic-tac-toe/TicTacToe';
import MemoryCuple from './components/memory-cuples/MemoryCuple';
import RockPaperScissor from './components/rock-paper-scissor/RockPaperScissor';
import DrawinTicTacToe from './components/drawin-tic-tac-toe/DrawinTicTacToe';
import Frog from './components/frog/Frog';
import DrawinHangman from './components/drawin-hangman/DrawinHangman';
import Button from './components/button/Button';
import { useState } from 'react';
import Hangman from './components/hangman/Hangman';
import WhackAMole from './components/whack-a-mole/WhackAMole';

const App = () => {
  const [activeGame, setActiveGame] = useState(null);

  const renderGame = () => {
    switch (activeGame) {
      case 'tic-tac-toe':
        return <TicTacToe setActiveGame={setActiveGame} />;
      case 'memory-cuples':
        return <MemoryCuple setActiveGame={setActiveGame} />;
      case 'rock-paper-scissor':
        return <RockPaperScissor setActiveGame={setActiveGame} />;
      case 'hangman':
        return (
          <>
            <Hangman setActiveGame={setActiveGame} /> 
            
          </>
        );
      case 'whack-a-mole':
        return <WhackAMole onBackToMenu={() => setActiveGame(null)} />;
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
          {activeGame ? (
            renderGame()
          ) : (
            <>
              <div className="game-links">
                <Button onClick={() => setActiveGame('hangman')}>Hangman</Button>
                <Button onClick={() => setActiveGame('tic-tac-toe')}>Tic-Tac-Toe</Button>
                <Button onClick={() => setActiveGame('memory-cuples')}>Memory Cuples</Button>
                <Button onClick={() => setActiveGame('rock-paper-scissor')}>Rock Paper Scissor</Button>
                <Button onClick={() => setActiveGame('whack-a-mole')}>Whack a Mole</Button>
              </div>
              <div className='drawin-tic-tac-toe'>
              <DrawinTicTacToe /> </div>
              <Frog />
              <div className='drawin-hangman'>
              <DrawinHangman /></div>
            </>
          )}
        </div>

        <footer className="footer">
          <p className="made">
            Made * by{' '}
            <a className="name" href="https://github.com/JoseAngelBelando" target="_blank" rel="github">
              José Angel
            </a>{' '}
            -{' '}
            <a className="repository" href="https://github.com/JoseAngelBelando/Game-react-scss" target="_blank" rel="github">
              Repository
            </a>
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
