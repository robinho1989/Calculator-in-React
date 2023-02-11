type resultArr = {
	value: string;
}[];
type DisplayTypes = {
	displayValue: resultArr;
};

export const ResultDisplay = ({ displayValue }: DisplayTypes) => {
	const result = displayValue
		.map((item) => {
			return item.value;
		})
		.join('');
	return <p>{result}</p>;
};
