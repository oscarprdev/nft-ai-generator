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
			secondary
			content={content}
			disabled={disabled}
			pending={pending}
		/>
	);
};

export default FormButton;
