import styled from 'styled-components';

export const FrogContainer = styled.div`
	position: relative;
	top: 6rem;
	width: 200px;
	height: 200px;
	background: radial-gradient(circle, #4caf50 60%, #388e3c 100%);
	border-radius: 50%;
	box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.7);
	margin: auto;
`;

export const Eye = styled.div`
	position: absolute;
	width: 70px;
	height: 70px;
	background: radial-gradient(circle, #fff 60%, #ccc 100%);
	border-radius: 50%;
	top: 20px;
	box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);

	&.left {
		left: 15px;
	}

	&.right {
		right: 15px;
	}
`;

export const Pupil = styled.div`
	position: absolute;
	width: 30px;
	height: 30px;
	background: black;
	border-radius: 50%;
	top: 20px;

	&.left {
		left: 35px;
	}

	&.right {
		right: 35px;
	}
`;

export const Mouth = styled.div`
	position: absolute;
	width: 140px;
	height: 80px;
	background: radial-gradient(circle, #e57373 60%, #d32f2f 90%);
	border-radius: 0 0 70px 70px;
	top: 110px;
	left: 30px;
	box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const Nouse = styled.div`
	position: absolute;
	width: 15px;
	height: 15px;
	background: #000;
	border-radius: 50%;
	top: 80px;

	&.left {
		left: 70px;
	}

	&.right {
		right: 70px;
	}
`;
