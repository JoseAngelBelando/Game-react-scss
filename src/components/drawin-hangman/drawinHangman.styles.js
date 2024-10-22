// Hangman.styles.js
import styled from 'styled-components';

export const HangmanContainer = styled.div`
	position: absolute;
	left: 10%;
	top: 50%;
	width: 200px;
	height: 300px;
`;

export const HPost = styled.div`
	position: absolute;
	width: 16px;
	height: 290px;
	background-color: white;
	left: 50px;
	bottom: 0;

	&::after {
		content: '';
		position: absolute;
		width: 290px;
		height: 10px;
		background-color: white;
		bottom: 0;
		right: -150px;
	}
`;

export const HBeam = styled.div`
	position: absolute;
	width: 100px;
	height: 10px;
	background-color: white;
	top: 0;
	left: 50px;
`;

export const HRope = styled.div`
	position: absolute;
	width: 5px;
	height: 50px;
	background-color: white;
	left: 140px;
	top: 10px;
`;

export const HHead = styled.div`
	position: absolute;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: white;
	left: 120px;
	top: 60px;
`;

export const HBody = styled.div`
	position: absolute;
	width: 10px;
	height: 80px;
	background-color: white;
	left: 135px;
	top: 100px;
`;

export const HLeftArm = styled.div`
	position: absolute;
	width: 60px;
	height: 10px;
	background-color: white;
	top: 120px;
	left: 75px;
	transform: rotate(-45deg);
	transform-origin: left bottom;
`;

export const HRightArm = styled.div`
	position: absolute;
	width: 60px;
	height: 10px;
	background-color: white;
	top: 120px;
	left: 145px;
	transform: rotate(45deg);
	transform-origin: right bottom;
`;

export const HLeftLeg = styled.div`
	position: absolute;
	width: 10px;
	height: 60px;
	background-color: white;
	left: 135px;
	top: 180px;
	transform: rotate(-30deg);
`;

export const HRightLeg = styled.div`
	position: absolute;
	width: 10px;
	height: 60px;
	background-color: white;
	left: 135px;
	top: 180px;
	transform: rotate(20deg);
`;
