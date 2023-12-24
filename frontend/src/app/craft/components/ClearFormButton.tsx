'use client';

import Button from '@/app/components/Button';
import { clearCookiesAction } from '../actions/clear-cookies.action';

const ClearFormButton = () => {
	const handleClearForm = () => {
		clearCookiesAction();
	};

	return (
		<Button
			tertiary
			content='Clear'
			type='reset'
			onClick={handleClearForm}
		/>
	);
};

export default ClearFormButton;
