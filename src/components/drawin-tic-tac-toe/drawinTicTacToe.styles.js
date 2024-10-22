// src/components/drawin-board/DrawinBoard.styles.js
import styled from 'styled-components';

export const BoardContainer = styled.div`
	position: absolute;
	right: 10%;
	top: 50%;
	display: grid;
	grid-template-columns: repeat(3, 80px);
	grid-template-rows: repeat(3, 80px);
	gap: 10px;
	transform: rotate(-20deg); /* Usamos 'transform' en lugar de 'rotate' */
`;

export const BoardCell = styled.div`
	color: red;
	width: 80px;
	height: 80px;
	background-color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 2em;
	font-weight: bold;
	border-radius: 10px;
`;
