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
import { MathButton } from '../mathButton/MathButton';

type resultArr = {
	value: string;
}[];

export const App = () => {
	const [resultArr, setResultArr] = useState<resultArr>([]);
	const [displayValue, setDisplayValue] = useState('');
	const [disableButton, setDisableButton] = useState(true);
	useEffect(() => {
		const result = resultArr
			.map((item) => {
				return item.value;
			})
			.join('');
		setDisplayValue(result);
	}, [resultArr]);

	return (
		<section className={styles.section}>
			<div className={styles.appContainer}>
				<ResultDisplay displayValue={displayValue} />
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
											disableButton={disableButton}
											setDisableButton={setDisableButton}
											setResultArr={setResultArr}
										/>
									</li>
								);
							})}
							<li>
								<EqualityButton
									disableButton={disableButton}
									resultArr={resultArr}
									setDisplayValue={setDisplayValue}
									setResultArr={setResultArr}
									setDisableButton={setDisableButton}
								/>
							</li>
						</ul>
					</div>
					<div className={styles.arithmeticButtonsContainer}>
						<ul className={styles.arithmeticButtonsList}>
							{arithmeticOperations.map((button) => {
								return (
									<li key={button.value}>
										<MathButton
											displayValue={displayValue}
											value={button.value}
											className={button.className}
											resultArr={resultArr}
											disableButton={disableButton}
											setResultArr={setResultArr}
											setDisableButton={setDisableButton}
										/>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
				<ClearButton
					setDisableButton={setDisableButton}
					setResultArr={setResultArr}
				/>
			</div>
		</section>
	);
};
