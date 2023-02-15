type ResultArr = {
	value: string;
}[];
type ClearButtonProps = {
	setDisableButton: (active: boolean) => void;
	setResultArr: (active: ResultArr) => void;
};

export const ClearButton = ({
	setDisableButton,
	setResultArr,
}: ClearButtonProps) => {
	const clearResultValue = () => {
		setResultArr([]);
		setDisableButton(true)
	};
	return <button onClick={clearResultValue}>Clear</button>;
};
