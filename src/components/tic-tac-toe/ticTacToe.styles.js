import styled from 'styled-components';

// Contenedor principal del juego
export const TicTacToeContainer = styled.div`
	text-align: center;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	align-items: center;
	justify-content: center;
`;

// Contenedor del tablero
export const Board = styled.div`
	display: inline-block;
`;

// Fila del tablero
export const Row = styled.div`
	display: flex;
`;

// Estilo para las casillas
export const Square = styled.button`
	width: 80px;
	height: 80px;
	background-color: red;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 2em;
	border-radius: 5px;
	cursor: pointer;
	transition: background-color 0.3s;
	margin: 5px;

	&:hover {
		background-color: #ddd;
	}
`;

// Estilo para el botón de reinicio y el de volver al menú
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

	&:last-child {
		background-color: black;

		&:hover {
			background-color: red;
		}
	}
`;
