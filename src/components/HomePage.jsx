// src/components/HomePage.jsx
import {} from 'react';
import { Link } from 'react-router-dom'; // Asegúrate de tener react-router-dom instalado

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="game-modes">
        <Link to="/simple-mode">
          <div className="game-modes__item">
            <img src="./assets/images/image-rules.svg" alt="Simple mode rules" />
            <span>SIMPLE MODE</span>
          </div>
        </Link>
        <Link to="/advanced-mode">
          <div className="game-modes__item">
            <img src="./assets/images/image-rules-bonus.svg" alt="Advanced mode rules" />
            <span>ADVANCED MODE</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
