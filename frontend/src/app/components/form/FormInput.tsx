import { ChangeEvent } from 'react';

interface FormInputProps {
	type: string;
	placeholder: string;
	id: string;
	name: string;
	required?: boolean;
	onChange?(e: ChangeEvent<HTMLInputElement>): void;
}

const FormInput = ({ type, placeholder, id, name, required, onChange }: FormInputProps) => {
	return (
		<input
			className='w-full p-3 bg-transparent rounded-md outline-none border font-light border-zinc-300'
			type={type}
			placeholder={placeholder}
			id={id}
			name={name}
			required={required}
			onChange={onChange}
		/>
	);
};

export default FormInput;
