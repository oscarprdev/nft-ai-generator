'use client';

import Button from '../Button';
import { useFormStatus } from 'react-dom';

interface FormButtonProps {
	content: string;
	disabled?: boolean;
}

const FormButton = ({ content, disabled }: FormButtonProps) => {
	const { pending } = useFormStatus();

	return (
		<Button
			type='submit'
			secondary
			content={content}
			disabled={pending}
			pending={pending}
		/>
	);
};

export default FormButton;
