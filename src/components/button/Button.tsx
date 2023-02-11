import React from 'react';
import styles from './button.module.css';
type ResultArr = {
	value: string;
}[];
type ButtonValue = {
	value: string;
	className: string;
	resultArr: ResultArr;
	setResultArr: (active: ResultArr) => void;
};

export const Button = ({
	value,
	className,
	resultArr,
	setResultArr,
}: ButtonValue) => {
	const valueHandler = (element: React.MouseEvent<HTMLButtonElement>) => {
		const buttonValue = element.currentTarget.textContent;
		if (buttonValue) {
			setResultArr([...resultArr, { value: buttonValue }]);
		}
	};

	return (
		<button onClick={valueHandler} className={`${styles}.${className}`}>
			{value}
		</button>
	);
};
