// src/components/memory-cuples/memoryCuple.styles.js

import styled from 'styled-components';

// Contenedor principal del juego
export const MemoryCupleContainer = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	gap: 2rem;
	background-color: black; /* Color de fondo */
`;

// Estilo del título
export const Title = styled.h1`
	margin-top: 2rem;
	color: green;
`;

// Contenedor del tablero de juego
export const GameBoard = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 100px);
	grid-template-rows: repeat(3, 100px);
	grid-gap: 0.7rem;
	margin-top: 2rem;
`;

// Estilo de las cartas
export const Card = styled.div`
	width: 6rem;
	height: 6rem;
	background-color: green;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.5rem;
	color: white;
	cursor: pointer;
	border-radius: 0.5rem;
	transition: 0.3s ease;

	&:hover {
		background-color: darkgreen;
	}

	&.flip {
		background-color: #f00;
		color: white;
		cursor: default;
	}
`;

// Estilo del mensaje
export const Message = styled.div`
	margin-top: 20px;
	text-align: center;
	color: #fff;
`;

// Estilo del botón de reinicio
export const RestartButton = styled.button`
	margin-top: 10px;
	padding: 10px 20px;
	font-size: 16px;
	cursor: pointer;
	background-color: green;
	color: white;
	border: none;
	border-radius: 5px;
	transition: 0.3s ease;

	&:hover {
		background-color: darkgreen;
	}
`;

// Estilo del botón de volver
export const BackButton = styled(RestartButton)`
	background-color: black;
	margin-left: 1.5rem; /* Color diferente para el botón de volver */

	&:hover {
		background-color: red; /* Color diferente al pasar el mouse */
	}
`;
