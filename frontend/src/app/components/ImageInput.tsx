'use client';

import { useFormStatus } from 'react-dom';
import LoadIcon from './icons/LoadIcon';

const ImageInput = () => {
	const { pending } = useFormStatus();

	return (
		<label className='flex flex-col items-center gap-5'>
			<input
				name='prompt'
				placeholder='Image description'
				disabled={pending}
				className='p-3 min-w-[300px] rounded-full text-zinc-500 disabled:text-zinc-400'
			/>
			<div className='h-5'>{pending && <LoadIcon className='w-8 animate-spin' />}</div>
		</label>
	);
};

export default ImageInput;
