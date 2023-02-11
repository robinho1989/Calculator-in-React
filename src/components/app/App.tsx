import { useState } from 'react';
import { ResultDisplay } from '../resultDisplay/ResultDisplay';
import { Button } from '../button/Button';
import styles from './app.module.css';
import { buttonPattern } from '../../buttonPattern';
import { ClearButton } from '../clearButton/ClearButton';

type resultArr = {
	value: string;
}[];

export const App = () => {
	const [resultArr, setResultArr] = useState<resultArr>([]);

	return (
		<section className={styles.section}>
			<div className={styles.appContainer}>
				<ResultDisplay displayValue={resultArr} />
				<div className={styles.buttonsContainer}>
					<ul className={styles.buttonsList}>
						{buttonPattern.map((button) => {
							return (
								<li key={button.value}>
									<Button
										value={button.value}
										className={button.className}
										resultArr={resultArr}
										setResultArr={setResultArr}
									/>
								</li>
							);
						})}
					</ul>
				</div>
				<ClearButton />
			</div>
		</section>
	);
};
