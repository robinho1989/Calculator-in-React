type ResultArr = {
	value: string;
}[];
type ClearButtonProps = {
	setResultArr: (active: ResultArr) => void;
};

export const ClearButton = ({ setResultArr }: ClearButtonProps) => {
	const clearResultValue = () => {
        setResultArr([])
    };
	return <button onClick={clearResultValue}>Clear</button>;
};
