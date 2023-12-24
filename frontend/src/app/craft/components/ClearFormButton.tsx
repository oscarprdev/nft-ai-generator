'use client';

import Button from '@/app/components/Button';
import { clearFormAction } from '../actions/clear-form.action';

const ClearFormButton = () => {
	const handleClearForm = () => {
		clearFormAction();
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
