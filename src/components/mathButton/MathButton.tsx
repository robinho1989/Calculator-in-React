import styles from './mathButton.module.css';

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

export const MathButton = ({
	value,
	className,
	disableButton,
	resultArr,
	setDisableButton,
	setResultArr,
}: ButtonValue) => {
	const valueHandler = (element: React.MouseEvent<HTMLButtonElement>) => {
		const buttonValue = element.currentTarget.textContent;
		if (buttonValue) {
			setResultArr([...resultArr, { value: buttonValue }]);
			setDisableButton(true);
		}
	};
	const alertInfo = () => {
		alert('Najpierw podaj liczbę');
	};
	return (
		<button
			onClick={disableButton===false ? valueHandler : alertInfo}
			className={`${styles}.${className}`}
		>
			{value}
		</button>
	);
};
