import styles from './equalityButton.module.css';
type ResultArr = {
	value: string;
}[];
type EqualityButtonTypes = {
	disableButton: boolean;
	resultArr: ResultArr;
	setDisplayValue: (active: string) => void;
	setResultArr: (active: ResultArr) => void;
	setDisableButton: (active: boolean) => void;
};
export const EqualityButton = ({
	disableButton,
	resultArr,
	setDisplayValue,
	setDisableButton,
	setResultArr,
}: EqualityButtonTypes) => {
	const valueFromResultArrHandler = () => {
		const valueFromResultArr = resultArr
			.map((item) => {
				return item.value;
			})
			.join('');

		const resultDisplay = eval(valueFromResultArr);
		const resultToString = String(resultDisplay);
		setDisplayValue(resultToString);
		setResultArr([{ value: resultToString }]);
	};
	const alertInfo = () => {
		alert('Niepoprawne działanie');
	};
	return (
		<button onClick={disableButton ? alertInfo : valueFromResultArrHandler}>
			=
		</button>
	);
};
