import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	color: #fff;
	background: radial-gradient(circle at center, #1f3756, #141539);
	padding: 2rem;
`;

export const Header = styled.header`
	display: flex;
	justify-content: space-between;
	width: 100%;
	max-width: 700px;
	border: 2px solid hsl(217, 16%, 45%);
	padding: 1.6rem;
	border-radius: 1rem;
	margin-bottom: 2rem;
`;

export const ScoreBoard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #fff;
	color: hsl(229, 64%, 46%);
	border-radius: 1rem;
	padding: 0.5rem;
	width: 100px;
`;

export const ScoreTitle = styled.span`
	font-size: 1.25rem;
`;

export const ScorePoints = styled.span`
	font-size: 2.5rem;
	font-weight: 700;
`;

export const Logo = styled.div`
	text-align: center;
	font-size: 1.25rem;

	@media (min-width: 480px) {
		font-size: 3rem;
	}

	span {
		display: block;
	}
`;

export const Main = styled.main`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

export const GameItems = styled.div`
	display: flex;
	gap: 1rem;
`;

export const GameItem = styled.div`
	background: #fff;
	border: 15px solid #5671f5;
	border-radius: 50%;
	box-shadow: 0 5px #2a45c2;
	cursor: pointer;
	width: 115px;
	height: 115px;
	display: flex;
	justify-content: center;
	align-items: center;

	&:hover {
		transform: scale(0.9);
	}

	img {
		width: 50px;
	}
`;

export const GameResults = styled.div`
	display: flex;
	justify-content: space-around;
	width: 100%;
	max-width: 700px;
	text-align: center;
`;

export const GameItemResult = styled.div`
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

export const PlayAgainButton = styled.button`
	background: none;
	color: white;
	border: 1px solid white;
	border-radius: 0.5rem;
	padding: 0.5rem 1rem;
	cursor: pointer;
	margin-top: 1rem;
`;

export const RulesButton = styled.button`
	background: none;
	color: white;
	border: 1px solid white;
	border-radius: 0.5rem;
	padding: 0.5rem 1rem;
	cursor: pointer;
	margin-top: 2rem;
`;
