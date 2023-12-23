'use client';

import { ChangeEvent, useState } from 'react';

const PromptTextarea = () => {
	const [textareaValue, setTextareaValue] = useState<string>('');

	const handleTextareaChange = (e: ChangeEvent) => {
		if (e.target instanceof HTMLTextAreaElement) {
			const value = e.target.value;
			setTextareaValue(value);
		}
	};

	return (
		<div className='relative w-full h-fit'>
			<textarea
				onChange={handleTextareaChange}
				maxLength={100}
				required
				name='prompt'
				placeholder='Put your prompt'
				className='w-full h-fit rounded-lg border bg-transparent border-zinc-300 p-3 font-light resize-none outline-none'
			/>
			<span className='absolute bottom-1 right-2 text-sm text-zinc-300'>{textareaValue.length}/100</span>
		</div>
	);
};

export default PromptTextarea;
