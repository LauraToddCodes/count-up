import { Box, Typography, styled } from "@mui/material";

export const NumberContainer = styled(Typography)`
	font-size: 12rem;
	line-height: 1;
	font-family: "Oswald", sans-serif;
`;

export const PageContainer = styled(Box)`
	display: flex;
	width: 100vw;
	height: 600px;
	align-items: center;
	justify-content: center;
	font-size: 3rem;
`;

export const TimePeriodContainer = styled(Box)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 0 3rem;
	width: 200px;
`;

export const TimePeriod = styled(Typography)`
	font-size: 3rem;
	font-weight: 600;
	font-family: "Oswald", sans-serif;
	background-color: #000000;
	color: #ffffff;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding-bottom: 0.5rem;
`;
