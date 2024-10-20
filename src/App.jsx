import './scss/styles.scss'
import './scss/styles.scss';

function App ()  {
  return (
    <div>
      <header className="header">
        <div className="container">
          <h1 className="title">
            Jose <span className="game">Game</span>
          </h1>
        </div>
      </header>

      <div className="content">
        <div className="game-links">
          <a target="_blank" rel="noopener noreferrer" href="/hangman.html">
            Hangman
          </a>
          <a target="_blank" rel="noopener noreferrer" href="/tic-tac-toe.html">
            Tic-Tac-Toe
          </a>
          <a target="_blank" rel="noopener noreferrer" href="/memory-cuples.html">
            Memori Cuples
          </a>
          <a target="_blank" rel="noopener noreferrer" href="/rock-paper-scissor.html">
            Rock Paper Scissor
          </a>
          <a target="_blank" rel="noopener noreferrer" href="/bingo.html">
            Bingo
          </a>

          {/* Frog */}
          <div className="frog">
            <div className="pupil left"></div>
            <div className="pupil right"></div>
            <div className="mouth"></div>
            <div className="nouse left"></div>
            <div className="nouse right"></div>
          </div>

          {/* Hangman */}
          <div className="hangman">
            <div className="h-post"></div>
            <div className="h-beam"></div>
            <div className="h-rope"></div>
            <div className="h-head"></div>
            <div className="h-body"></div>
            <div className="h-left-arm"></div>
            <div className="h-right-arm"></div>
            <div className="h-left-leg"></div>
            <div className="h-right-leg"></div>
          </div>

          {/* Tic Tac Toe */}
          <div className="drawin_board">
            <div className="drawin-cell" data-index="0">X</div>
            <div className="drawin-cell" data-index="1">O</div>
            <div className="drawin-cell" data-index="2">X</div>
            <div className="drawin-cell" data-index="3"></div>
            <div className="drawin-cell" data-index="4">X</div>
            <div className="drawin-cell" data-index="5"></div>
            <div className="drawin-cell" data-index="6">O</div>
            <div className="drawin-cell" data-index="7"></div>
            <div className="drawin-cell" data-index="8">O</div>
          </div>
        </div>
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
  );
}

export default App;