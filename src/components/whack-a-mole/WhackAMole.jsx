import { useState, useEffect } from 'react';
import {
    Body,
    H1,
    GameContainer,
    Mole,
    Score,
    StartButton,
    BackToMenuButton, 
    MessageContainer,
    Message
} from './whackAMole.styles'; 

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
    // Topo
    const showMole = () => {
        const gameArea = document.getElementById('game');
        const maxX = gameArea.clientWidth - 70; 
        const maxY = gameArea.clientHeight - 70; 
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
                setMoleSpeed(moleSpeed - 80);
            } else {
                clearInterval(speedIncreaseInterval);
            }
        }, 1000);
    };
// si isActive es true se ejecuta increaseMoleSpeed
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
