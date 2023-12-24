'use client';

import Button from '../Button';
import { useFormStatus } from 'react-dom';
import Modal from '../Modal';

interface FormButtonProps {
	content: string;
	disabled?: boolean;
	modal?: boolean;
}

const FormButton = ({ content, modal }: FormButtonProps) => {
	const { pending } = useFormStatus();

	return (
		<>
			<Button
				type='submit'
				secondary
				content={content}
				disabled={pending}
				pending={pending}
			/>
			{modal && pending && <Modal modal='loading' />}
		</>
	);
};

export default FormButton;
