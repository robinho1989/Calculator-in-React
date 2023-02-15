type DisplayTypes = {
	displayValue: string;
};

export const ResultDisplay = ({ displayValue }: DisplayTypes) => {
	return <p>{displayValue}</p>;
};
