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

export const Button = styled.button`
	border-radius: 15px;
	height: 1.5rem;
	cursor: pointer;
`;

export const Message = styled.div`
	font-size: 1.2rem;
`;
