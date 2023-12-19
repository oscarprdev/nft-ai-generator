'use client';

import { loginAction } from '@/app/actions/login-action/login-action';
import FormButton from '../../form/FormButton';
import FormInput from '../../form/FormInput';
import LabelPassword from '../../form/LabelPassword';
import { useFormState } from 'react-dom';

const LoginForm = () => {
	const [state, formAction] = useFormState(loginAction, { message: '' });

	return (
		<form
			className='flex flex-col items-center gap-5 w-full'
			action={formAction}>
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
				<FormButton content='Login' />
			</div>
			{state.message && <p className='text-sm text-red-600'>{state.message}!</p>}
		</form>
	);
};

export default LoginForm;
