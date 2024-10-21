// src/App.jsx

import './scss/index.scss';
import './scss/drawins.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import TicTacToe from './components/tic-tac-toe/TicTacToe';
import MemoryCuple from './components/memory-cuples/MemoryCuple';
import RockPaperScissor from './components/rock-paper-scissor/RockPaperScissor';
import Frog from './components/frog/Frog';
import Button from './components/button/Button';
import { useState } from 'react';

function App() {
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
                        {/* Cargar el componente Hangman solo cuando el juego está activo */}
                        
                        <Button onClick={() => setActiveGame(null)}>Volver a la Página Principal</Button> {/* Botón para volver */}
                    </>
                );
            default:
                return null; // No renderiza nada si no hay juego activo
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
                            {/* Mostrar enlaces de juegos en la página principal */}
                            <div className="game-links">
                                <Button onClick={() => setActiveGame('hangman')}>Hangman</Button>
                                <Button onClick={() => setActiveGame('tic-tac-toe')}>Tic-Tac-Toe</Button>
                                <Button onClick={() => setActiveGame('memory-cuples')}>Memory Cuples</Button>
                                <Button onClick={() => setActiveGame('rock-paper-scissor')}>Rock Paper Scissor</Button>
                                <Button onClick={() => setActiveGame('bingo')}>Bingo</Button>
                            </div>
                            {/* Renderiza la rana solo en la página de inicio */}
                            <Frog />
                        </>
                    )}
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
