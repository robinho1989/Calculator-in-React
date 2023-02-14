type resultArr = {
	value: string;
}[];
type DisplayTypes = {
	displayValue: string;
	resultChecked: boolean;
	setDisplayArr: (active: resultArr) => void;
	setResultArr:(active:resultArr)=>void
};


export const ResultDisplay = ({ displayValue,resultChecked,setResultArr }: DisplayTypes) => {
	const value = () => {
		if (resultChecked === true) {
			setResultArr([{ value: displayValue }]);
		}
	};
	
	return <p onChange={()=>{console.log('sa')}}>{displayValue}</p>;
};
