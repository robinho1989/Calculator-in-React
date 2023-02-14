import { useEffect, useState } from 'react';
import { ResultDisplay } from '../resultDisplay/ResultDisplay';
import { Button } from '../button/Button';
import styles from './app.module.css';
import {
	arithmeticOperations,
	numberButtonsPattern,
} from '../../buttonPattern';
import { ClearButton } from '../clearButton/ClearButton';
import { EqualityButton } from '../equalityButton/EqualityButton';

type resultArr = {
	value: string;
}[];

export const App = () => {
	const [resultArr, setResultArr] = useState<resultArr>([]);
	const [displayValue, setDisplayValue] = useState('');
	const [resultChecked, setResultChecked] = useState(false);
	useEffect(() => {
		const result = resultArr
			.map((item) => {
				return item.value;
			})
			.join('');
		setDisplayValue(result);
	}, [resultArr]);
	console.log(resultChecked);
	return (
		<section className={styles.section}>
			<div className={styles.appContainer}>
				<ResultDisplay
					displayValue={displayValue}
					setDisplayArr={setResultArr}
					resultChecked={resultChecked}
					setResultArr={setResultArr}
				/>
				<div className={styles.buttonsContainer}>
					<div className={styles.numericButtonsContainer}>
						<ul className={styles.numericButtonsList}>
							{numberButtonsPattern.map((button) => {
								return (
									<li key={button.value}>
										<Button
											displayValue={displayValue}
											value={button.value}
											className={button.className}
											resultArr={resultArr}
											resultChecked={resultChecked}
											setResultChecked={setResultChecked}
											setResultArr={setResultArr}
										/>
									</li>
								);
							})}
							<li>
								<EqualityButton
									resultArr={resultArr}
									setDisplayValue={setDisplayValue}
									setResultArr={setResultArr}
									setResultChecked={setResultChecked}
								/>
							</li>
						</ul>
					</div>
					<div className={styles.arithmeticButtonsContainer}>
						<ul className={styles.arithmeticButtonsList}>
							{arithmeticOperations.map((button) => {
								return (
									<li key={button.value}>
										<Button
											displayValue={displayValue}
											value={button.value}
											className={button.className}
											resultArr={resultArr}
											resultChecked={resultChecked}
											setResultArr={setResultArr}
											setResultChecked={setResultChecked}
										/>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
				<ClearButton setResultArr={setResultArr} />
			</div>
		</section>
	);
};
