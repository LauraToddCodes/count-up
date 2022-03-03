import {
	NumberContainer,
	PageContainer,
	TimePeriod,
	TimePeriodContainer,
} from "./app.styles";

import React from "react";
import { useState } from "react";

export function App() {
	const [displayDayNumber, setDisplayDayNumber] = useState(0);
	const [displayMonthNumber, setDisplayMonthNumber] = useState(0);
	const [displayYearNumber, setDisplayYearNumber] = useState(0);

	const dayNumber = 11;
	const monthNumber = 3;
	const yearNumber = 22;

	if (displayDayNumber < dayNumber) {
		setTimeout(() => setDisplayDayNumber(displayDayNumber + 1), 50);
	}

	if (displayDayNumber === dayNumber) {
		if (displayMonthNumber < monthNumber) {
			setTimeout(() => setDisplayMonthNumber(displayMonthNumber + 1), 50);
		}
	}

	if (displayMonthNumber === monthNumber) {
		if (displayYearNumber < yearNumber) {
			setTimeout(() => setDisplayYearNumber(displayYearNumber + 1), 50);
		}
	}

	const extraDayZero = displayDayNumber < 10 ? 0 : null;
	const extraMonthZero = displayMonthNumber < 10 ? 0 : null;
	const extraYearZero = displayYearNumber < 10 ? 0 : null;

	return (
		<PageContainer className="App">
			<TimePeriodContainer>
				<NumberContainer>
					{extraDayZero}
					{displayDayNumber}
				</NumberContainer>
				<TimePeriod>DAY</TimePeriod>
			</TimePeriodContainer>
			<TimePeriodContainer>
				<NumberContainer>
					{extraMonthZero}
					{displayMonthNumber}
				</NumberContainer>
				<TimePeriod>MONTH</TimePeriod>
			</TimePeriodContainer>
			<TimePeriodContainer>
				<NumberContainer>
					{extraYearZero}
					{displayYearNumber}
				</NumberContainer>
				<TimePeriod>YEAR</TimePeriod>
			</TimePeriodContainer>
		</PageContainer>
	);
}
