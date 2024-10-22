import { useState } from 'react';
import {
    Container,
    Header,
    ScoreBoard,
    ScoreTitle,
    ScorePoints,
    Main,
    GameItems,
    GameItem,
    GameResults,
    GameItemResult,
    PlayAgainButton,
    BackToMenuButton,
    Logo
} from './rockPaperScissor.styles'; // Importa los estilos desde el archivo de estilos
import rockImage from '../../../public/assets/images/icon-rock.svg';
import paperImage from '../../../public/assets/images/icon-paper.svg';
import scissorsImage from '../../../public/assets/images/icon-scissors.svg';
import triangleImage from '../../../public/assets/images/bg-triangle.svg';

const images = {
    Rock: rockImage,
    Paper: paperImage,
    Scissors: scissorsImage,
    Triangle: triangleImage,
};

const RockPaperScissor = ({ setActiveGame }) => {
    const [userChoice, setUserChoice] = useState(null);
    const [computerChoice, setComputerChoice] = useState(null);
    const [result, setResult] = useState('');
    const [score, setScore] = useState({ user: 0, computer: 0 });

    const choices = ['Rock', 'Paper', 'Scissors'];

    const playGame = (choice) => {
        const randomChoice = choices[Math.floor(Math.random() * choices.length)];
        setUserChoice(choice);
        setComputerChoice(randomChoice);

        if (choice === randomChoice) {
            setResult('Draw');
        } else if (
            (choice === 'Rock' && randomChoice === 'Scissors') ||
            (choice === 'Scissors' && randomChoice === 'Paper') ||
            (choice === 'Paper' && randomChoice === 'Rock')
        ) {
            setResult('You Win!');
            setScore((prevScore) => ({ ...prevScore, user: prevScore.user + 1 }));
        } else {
            setResult('You Lose!');
            setScore((prevScore) => ({ ...prevScore, computer: prevScore.computer + 1 }));
        }
    };

    const playAgain = () => {
        setUserChoice(null);
        setComputerChoice(null);
        setResult('');
    };

    return (
        <Container>
            <Header>
                <ScoreBoard>
                    <ScoreTitle>YOU</ScoreTitle>
                    <ScorePoints>{score.user}</ScorePoints>
                </ScoreBoard>
                <Logo>
                    <span>ROCK</span>
                    <span>PAPER</span>
                    <span>SCISSORS</span>
                </Logo>
                <ScoreBoard>
                    <ScoreTitle>PC</ScoreTitle>
                    <ScorePoints>{score.computer}</ScorePoints>
                </ScoreBoard>
            </Header>
            <Main>
                <GameItems>
                    {choices.map((choice, index) => (
                        <GameItem
                            key={index}
                            style={{
                                top: choice === 'Rock' ? '285px' : choice === 'Paper' ? '100px' : '100px',
                                left: choice === 'Rock' ? '120px' : choice === 'Paper' ? '0' : 'auto',
                                right: choice === 'Scissors' ? '0' : 'auto',
                            }}
                            onClick={() => playGame(choice)}
                        >
                            <img src={images[choice]} alt={choice} />
                        </GameItem>
                    ))}
                </GameItems>
                {userChoice && computerChoice && (
                    <GameResults>
                        <h2>Your Picked</h2>
                        <GameItemResult>
                            <img src={images[userChoice]} alt={userChoice} />
                        </GameItemResult>
                        <h2 id="game-result">{result}</h2>
                        <GameItemResult>
                            <img src={images[computerChoice]} alt={computerChoice} />
                        </GameItemResult>
                        <h2>PC Picked</h2>
                    </GameResults>
                )}
                <PlayAgainButton onClick={playAgain}>Play Again</PlayAgainButton>
                <BackToMenuButton onClick={() => setActiveGame(null)}>Back to Menu</BackToMenuButton>
            </Main>
        </Container>
    );
};

export default RockPaperScissor;
