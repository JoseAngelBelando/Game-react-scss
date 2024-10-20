// src/components/hangman/hangman.styles.js

import styled from 'styled-components';

export const HangmanContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: black;
	color: white;
`;

export const Title = styled.h1`
	font-size: 2.5rem;
	margin-bottom: 2rem;
`;

export const WordDisplay = styled.div`
	font-size: 2rem;
	letter-spacing: 0.2rem;
	margin-bottom: 1.5rem;
`;

export const InputContainer = styled.div`
	margin-bottom: 1rem;

	.h-input {
		padding: 0.5rem;
		font-size: 1.5rem;
		margin-right: 1rem;
		border-radius: 0.5rem;
		border: 1px solid #ccc;
	}

	.h-button {
		padding: 0.5rem 1rem;
		font-size: 1.2rem;
		background-color: green;
		color: white;
		border: none;
		border-radius: 0.5rem;
		cursor: pointer;
		transition: background-color 0.3s ease;

		&:hover {
			background-color: darkgreen;
		}
	}
`;

export const Message = styled.div`
	margin-top: 1rem;
	font-size: 1.2rem;
`;

export const IncorrectGuesses = styled.div`
	margin-top: 1rem;
	font-size: 1.2rem;
	text-align: center;

	p {
		margin: 0.5rem 0;
	}
`;

export const BackButton = styled.button`
	margin-top: 1rem;
	padding: 0.5rem 1rem;
	font-size: 1.2rem;
	background-color: black;
	color: #fff;
	border: none;
	border-radius: 0.5rem;
	cursor: pointer;
	transition: background-color 0.3s ease;

	&:hover {
		background-color: red;
	}
`;
