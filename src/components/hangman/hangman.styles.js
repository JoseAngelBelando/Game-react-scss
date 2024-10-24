import styled from 'styled-components';

export const HangmanContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 2rem;
	background-color: black;
	color: white;
`;

export const Title = styled.h1`
	font-size: 2rem;
	text-align: center;
`;

export const WordDisplay = styled.div`
	font-size: 2rem;
`;

export const Input = styled.input`
	border-radius: 15px;
	height: 2rem;
`;

export const Message = styled.div`
	font-size: 1.2rem;
`;

export const Button = styled.button`
	padding: 0.5rem 1rem;
	font-size: 1rem;
	background-color: green;
	color: white;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	transition: background-color 0.3s ease;
	margin: 0.5rem;

	&:hover {
		background-color: darkgreen;
	}
`;
export const BackToMenuButton = styled.button`
	padding: 10px 20px;
	font-size: 16px;
	cursor: pointer;
	color: white;
	border: none;
	border-radius: 5px;
	margin-top: 10px;
	background-color: black;

	&:hover {
		background-color: red;
	}
`;
