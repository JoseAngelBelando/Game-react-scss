import { useState, useEffect } from 'react';
import {
    Body,
    H1,
    GameContainer,
    Mole,
    Score,
    StartButton,
    BackToMenuButton, // Importa el nuevo botón estilizado
    MessageContainer,
    Message
} from './whackAMole.styles'; // Importar los componentes estilizados

const WhackAMole = ({ onBackToMenu }) => {
    const [score, setScore] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [molePosition, setMolePosition] = useState({ left: 0, top: 0 });
    const [moleSpeed, setMoleSpeed] = useState(1000);
    const [gameDuration] = useState(30);
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (isActive) {
            const interval = setInterval(showMole, moleSpeed);
            const timeout = setTimeout(endGame, gameDuration * 1000);

            return () => {
                clearInterval(interval);
                clearTimeout(timeout);
            };
        }
    }, [isActive, moleSpeed, gameDuration]);

    const startGame = () => {
        setScore(0);
        setMessage('');
        setIsActive(true);
        setMoleSpeed(1000);
    };

    const showMole = () => {
        const gameArea = document.getElementById('game');
        const maxX = gameArea.clientWidth - 70; // Resta el ancho del topo
        const maxY = gameArea.clientHeight - 70; // Resta el alto del topo
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        setMolePosition({ left: randomX, top: randomY });
    };

    const hitMole = () => {
        setScore(score + 1);
        setMolePosition({ left: 0, top: 0 }); // Ocultar el topo
    };

    const endGame = () => {
        setIsActive(false);
        setMessage('fin'); // Mensaje final
    };

    const increaseMoleSpeed = () => {
        const speedIncreaseInterval = setInterval(() => {
            if (moleSpeed > 850) {
                setMoleSpeed(moleSpeed - 60);
            } else {
                clearInterval(speedIncreaseInterval);
            }
        }, 1000);
    };

    useEffect(() => {
        if (isActive) {
            increaseMoleSpeed();
        }
    }, [isActive]);

    return (
        <Body>
            <H1>¡Golpea el topo!</H1>
            <GameContainer id="game">
                <Mole
                    style={{
                        left: molePosition.left,
                        top: molePosition.top,
                        display: isActive && molePosition.left !== 0 ? 'block' : 'none',
                    }}
                    onClick={hitMole}
                />
            </GameContainer>
            <Score>Puntuación: {score}</Score>
            <StartButton onClick={startGame}>Iniciar Juego</StartButton>
            <BackToMenuButton onClick={onBackToMenu}>Volver al Menú</BackToMenuButton> {/* Botón de regreso al menú */}
            <MessageContainer>
                <Message>{message}</Message>
            </MessageContainer>
        </Body>
    );
};

export default WhackAMole;
