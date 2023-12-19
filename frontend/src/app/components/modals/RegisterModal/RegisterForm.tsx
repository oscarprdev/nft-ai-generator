'use client';

import { useFormState } from 'react-dom';
import FormInput from '../../form/FormInput';
import FormButton from '../../form/FormButton';
import LabelPassword from '../../form/LabelPassword';
import { registerAction } from '@/app/home/actions/register-action';

const RegisterForm = () => {
	const [state, formAction] = useFormState(registerAction, { message: '' });

	return (
		<form
			className='flex flex-col items-center gap-5 w-full'
			action={formAction}>
			<label className='flex flex-col items-start gap-2 w-[inherit]'>
				Username
				<FormInput
					type='text'
					placeholder='Your amazing username'
					id='Username'
					name='Username'
					required
				/>
			</label>
			<label className='flex flex-col items-start gap-2 w-[inherit]'>
				Email
				<FormInput
					type='email'
					placeholder='Your wonderful email'
					id='email'
					name='email'
					required
				/>
			</label>
			<LabelPassword />
			<div className='w-[inherit] px-5'>
				<FormButton content='Sign up' />
			</div>
			{state.message && <p className='text-sm text-red-600'>{state.message}!</p>}
		</form>
	);
};

export default RegisterForm;
