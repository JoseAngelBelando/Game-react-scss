import { useState } from 'react';
import styled from 'styled-components';
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

// Estilos de componentes
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  background: black;  // Cambia el fondo a negro
  padding: 2rem;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 500px;
  border: 2px solid hsl(217, 16%, 45%);
  padding: 1.6rem;
  border-radius: 1rem;
  margin-bottom: 2rem;
`;

const ScoreBoard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  color: hsl(229, 64%, 46%);
  border-radius: 1rem;
  padding: 0.5rem;
  width: 100px;
`;

const ScoreTitle = styled.span`
  font-size: 1.25rem;
`;

const ScorePoints = styled.span`
  font-size: 2.5rem;
  font-weight: 700;
`;

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const GameItems = styled.div`
  position: relative;
  width: 360px;
  height: 520px;
  margin: 0 auto;
  background-image: url(${triangleImage});
  background-repeat: no-repeat;
  background-position: center;
`;

const GameItem = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 115px;
  height: 115px;
  border-radius: 50%;
  background: #fff;
  transition: transform 0.2s;
  cursor: pointer;

  &:hover {
    transform: scale(0.9);
  }

  img {
    width: 50px;
  }
`;

const GameResults = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 5rem;
`;

const GameItemResult = styled.div`
  background: #fff;
  border-radius: 50%;
  border: 15px solid #db2e4d;
  width: 115px;
  height: 115px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 50px;
  }
`;

const PlayAgainButton = styled.button`
  background: none;
  color: white;
  border: 1px solid white;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  margin-top: 1rem;
`;

const BackToMenuButton = styled.button`
  background: none;
  color: white;
  border: 1px solid white;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  margin-top: 1rem;
`;

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
        <div className="logo">
          <span className="block">ROCK</span>
          <span className="block">PAPER</span>
          <span className="block">SCISSORS</span>
        </div>
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
