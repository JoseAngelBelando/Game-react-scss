// src/components/button/button.styles.js

import styled from 'styled-components';

export const ButtonStyled = styled.button`
	margin: 10px 0;
	padding: 10px;
	width: 20rem;
	border: 1px solid white;
	background-color: white;
	color: black;
	border-radius: 15px;
	transition: 0.3s ease;
	cursor: pointer;

	&:hover {
		background-color: #ffeb3b;
		transition: 0.3s ease;
	}
`;
