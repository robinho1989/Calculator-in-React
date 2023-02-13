

type resultArr = {
	value: string;
}[];
type DisplayTypes = {
	displayValue: string;
	// resultArr: resultArr;
	// setDisplayValue: (active: string) => void;
};

export const ResultDisplay = ({ displayValue }: DisplayTypes) => {
	return <p>{displayValue}</p>;
};
