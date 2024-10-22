// src/components/whackAMole/whackAMole.styles.js
import styled from 'styled-components';

// Contenedor principal del juego
export const Body = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: black;
	font-family: Arial, sans-serif;
	color: white;
`;

// Estilo para el encabezado
export const H1 = styled.h1`
	color: #fff;
`;

// Contenedor del juego
export const GameContainer = styled.div`
	position: relative;
	width: 600px;
	height: 400px;
	background-color: #98fb98;
	border: 2px solid #4caf50;
	border-radius: 15px;
	overflow: hidden;
`;

// Estilo para el topo
export const Mole = styled.div`
	width: 70px;
	height: 70px;
	background-color: brown;
	border-radius: 50%;
	position: absolute;
	cursor: pointer;
	transition: background-color 0.3s;
`;

// Estilo para la puntuación
export const Score = styled.div`
	font-size: 24px;
	margin: 10px;
`;

// Estilo para el botón de inicio
export const StartButton = styled.button`
	padding: 10px 20px;
	font-size: 16px;
	cursor: pointer;
	background-color: #4caf50;
	color: white;
	border: none;
	border-radius: 5px;
	margin-top: 10px;
`;

// Estilo para el botón de regreso al menú
export const BackToMenuButton = styled.button`
	padding: 10px 20px;
	font-size: 16px;
	cursor: pointer;
	background-color: #f44336;
	color: white;
	border: none;
	border-radius: 5px;
	margin-top: 10px;
`;

// Contenedor para el mensaje
export const MessageContainer = styled.div`
	margin-top: 20px;
	color: white;
	font-size: 20px;
`;

// Estilo para el mensaje
export const Message = styled.p`
	color: white;
`;
