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
	disableButton: boolean;
	setResultArr: (active: ResultArr) => void;
	setDisableButton: (active: boolean) => void;
};

export const Button = ({
	value,
	className,
	resultArr,
	setResultArr,
	setDisableButton,
}: ButtonValue) => {
	const valueHandler = (element: React.MouseEvent<HTMLButtonElement>) => {
		const buttonValue = element.currentTarget.textContent;
		if (buttonValue) {
			setResultArr([...resultArr, { value: buttonValue }]);
			setDisableButton(false);
		}
	};

	return (
		<button onClick={valueHandler} className={`${styles}.${className}`}>
			{value}
		</button>
	);
};
