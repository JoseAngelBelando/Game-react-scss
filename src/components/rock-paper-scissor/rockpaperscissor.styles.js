// // src/components/rockPaperScissors.styles.js
// import styled from 'styled-components';

// export const RpsContainer = styled.div`
// 	max-width: 800px;
// 	height: 100vh;
// 	margin: 0 auto;
// 	padding: 3rem 0;
// 	color: #fff;
// 	background-image: radial-gradient(circle at center, #1f3756, #141539);
// 	font-family: 'Barlow Semi Condensed', sans-serif;
// 	text-align: center;
// `;

// export const GameItems = styled.div`
// 	position: relative;
// 	width: 340px;
// 	height: 540px;
// 	margin: 0 auto;
// 	background-repeat: no-repeat;
// 	background-position: center;
// 	background-image: url(../assets/images/bg-triangle.svg);
// `;

// export const GameItem = styled.div`
// 	position: absolute;
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
// 	width: 115px;
// 	height: 115px;
// 	border-radius: 50%;
// 	border: 15px solid transparent;
// 	box-shadow: 0 5px rgba(0, 0, 150, 0.1);
// 	background-color: #fff;
// 	transition: transform 0.2s;
// 	cursor: pointer;

// 	&:hover {
// 		transform: scale(0.9);
// 	}

// 	&.game-item--rock {
// 		top: 350px;
// 		left: 225px;
// 		border-color: #db2e4d;
// 	}

// 	&.game-item--paper {
// 		top: 175px;
// 		left: 250px;
// 		border-color: #5671f5;
// 	}

// 	&.game-item--scissors {
// 		top: 100px;
// 		right: 0;
// 		border-color: #eb9f0e;
// 	}

// 	&.game-item--lizard {
// 		top: 350px;
// 		left: 25px;
// 		border-color: #834ee3;
// 	}

// 	&.game-item--spock {
// 		top: 175px;
// 		left: -30px;
// 		border-color: #2d8dab;
// 	}
// `;

// export const GameResults = styled.div`
// 	display: flex;
// 	justify-content: space-around;
// 	padding: 2rem 0;

// 	h2 {
// 		margin: 0.5rem 0;
// 	}
// `;

// export const Score = styled.div`
// 	display: flex;
// 	justify-content: space-between;
// 	padding: 0 5rem;
// `;

// export const Modal = styled.div`
// 	position: fixed;
// 	top: 0;
// 	left: 0;
// 	width: 100%;
// 	height: 100vh;
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
// 	background-color: rgba(0, 0, 0, 0.9);
// `;

// export const ButtonRules = styled.button`
// 	position: absolute;
// 	right: 3rem;
// 	bottom: 3rem;
// 	background: none;
// 	padding: 1rem 2rem;
// 	border: none;
// 	border: 1px solid white;
// 	border-radius: 0.5rem;
// 	color: white;
// 	cursor: pointer;
// 	transition: background 0.3s;

// 	&:hover {
// 		background: rgba(255, 255, 255, 0.1);
// 	}
// `;
