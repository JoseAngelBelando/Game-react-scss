// src/components/hangman/Hangman.styles.js

import styled from 'styled-components';

export const HangmanContainer = styled.div`
	position: absolute;
	left: 10%;
	top: 50%;
	width: 200px;
	height: 300px;

	.h-post {
		position: absolute;
		width: 16px;
		height: 290px;
		background-color: white;
		left: 50px;
		bottom: 0;
	}

	.h-post::after {
		content: '';
		position: absolute;
		width: 290px;
		height: 10px;
		background-color: white;
		bottom: 0;
		right: -150px;
	}

	.h-beam {
		position: absolute;
		width: 100px;
		height: 10px;
		background-color: white;
		top: 0;
		left: 50px;
	}

	.h-rope {
		position: absolute;
		width: 5px;
		height: 50px;
		background-color: white;
		left: 140px;
		top: 10px;
	}

	.h-head {
		position: absolute;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		background-color: white;
		left: 120px;
		top: 60px;
	}

	.h-body {
		position: absolute;
		width: 10px;
		height: 80px;
		background-color: white;
		left: 135px;
		top: 100px;
	}

	.h-left-arm {
		position: absolute;
		width: 60px;
		height: 10px;
		background-color: white;
		top: 120px;
		left: 75px;
		transform: rotate(-45deg);
		transform-origin: left bottom;
	}

	.h-right-arm {
		position: absolute;
		width: 60px;
		height: 10px;
		background-color: white;
		top: 120px;
		left: 145px;
		transform: rotate(45deg);
		transform-origin: right bottom;
	}

	.h-left-leg {
		position: absolute;
		width: 10px;
		height: 60px;
		background-color: white;
		left: 135px;
		top: 180px;
		transform: rotate(-30deg);
	}

	.h-right-leg {
		position: absolute;
		width: 10px;
		height: 60px;
		background-color: white;
		left: 135px;
		top: 180px;
		transform: rotate(20deg);
	}
`;
