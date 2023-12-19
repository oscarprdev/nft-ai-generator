'use client';

import { ChangeEvent, useState } from 'react';
import FormInput from './FormInput';
import EyeIcon from '../icons/EyeIcon';
import EyeClosedIcon from '../icons/EyeClosedIcon';
import CheckIcon from '../icons/CheckIcon';

const LabelPassword = () => {
	const [passwordVisible, setPasswordVisible] = useState(false);
	const [password, setPassword] = useState<string>();

	const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);

	const updatePasswordValue = (e: ChangeEvent<HTMLInputElement>) => {
		const target = e.target;

		if (target instanceof HTMLInputElement) {
			setPassword(target.value);
		}
	};

	return (
		<label className='flex flex-col items-start gap-2 w-[inherit]'>
			<div className='flex items-center justify-between w-full'>
				<div className='flex items-center gap-1'>
					<p>Password</p>
					{password && password.length >= 8 && <CheckIcon className='w-4 text-[var(--card-green)]' />}
				</div>
				<p className='text-sm text-zinc-400'>min. {password?.length || 0}/8</p>
			</div>
			<div className='relative w-full'>
				<FormInput
					type={passwordVisible ? 'text' : 'password'}
					placeholder='Your awesome password'
					id='password'
					name='password'
					required
					onChange={updatePasswordValue}
				/>
				<div
					onClick={togglePasswordVisibility}
					className='cursor-pointer absolute top-[0.6rem] right-2 group'>
					{passwordVisible ? (
						<EyeClosedIcon className=' w-8 text-zinc-400 group-hover:text-zinc-600 transition-colors duration-300' />
					) : (
						<EyeIcon className='w-8 text-zinc-400 group-hover:text-zinc-600 transition-colors duration-300' />
					)}
				</div>
			</div>
		</label>
	);
};

export default LabelPassword;
