import styles from './equalityButton.module.css';
type ResultArr = {
	value: string;
}[];
type EqualityButtonTypes = {
	resultArr: ResultArr;
	setDisplayValue: (active: string) => void;
	setResultArr: (active: ResultArr) => void;
	setResultChecked: (active: boolean) => void;
};
export const EqualityButton = ({
	resultArr,
	setDisplayValue,
	setResultChecked,
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
		setResultChecked(true);
		setResultArr([{ value: resultToString }]);
		
	};
	return <button onClick={valueFromResultArrHandler}>=</button>;
};
