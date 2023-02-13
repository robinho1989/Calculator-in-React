import React from 'react';
import styles from './button.module.css';
type ResultArr = {
	value: string;
}[];
type ButtonValue = {
	displayValue: string;
	value: string;
	className: string;
	resultArr: ResultArr;
	resultChecked: boolean;
	setResultArr: (active: ResultArr) => void;
	setResultChecked: (active: boolean) => void;
};

export const Button = ({
	displayValue,
	value,
	className,
	resultArr,
	resultChecked,
	setResultArr,
	setResultChecked,
}: ButtonValue) => {
	const valueHandler = (element: React.MouseEvent<HTMLButtonElement>) => {
		const buttonValue = element.currentTarget.textContent;
		if (buttonValue) {
			if (resultChecked === true) {
				setResultArr([{ value: displayValue }]);
				setResultChecked(false);
			}
			if (resultChecked === false) {
				setResultArr([...resultArr, { value: buttonValue }]);
			}
		}
	};

	return (
		<button onClick={valueHandler} className={`${styles}.${className}`}>
			{value}
		</button>
	);
};
