'use server';

import { cookies } from 'next/headers';
import { strToCapital } from '@/app/utils/strToCapital';
import CraftModalAction from './CraftModalAction';

const CraftModal = () => {
	const file = cookies().get('file')?.value || '';
	const title = cookies().get('title')?.value || '';
	const prompt = cookies().get('prompt')?.value || '';
	const keywords = cookies().get('keywords')?.value || '';

	return (
		<article className='flex flex-col items-center gap-5 w-full'>
			<p className='mt-[-1rem]'>Review your generated AI</p>
			<img
				src={`/${file}`}
				alt='image generated'
				width={230}
				height={230}
				className='rounded-lg shadow-md'
			/>
			<div className='relative w-full pl-3'>
				<p className='text-zinc-500 font-light text-sm'>Title</p>
				<p className='font-light text-sm'>{strToCapital(title)}</p>
				<span className='absolute left-0 top-0 h-full w-1 bg-[var(--contrast-light)]' />
			</div>
			<div className='relative w-full pl-3'>
				<p className='text-zinc-500 font-light text-sm'>Prompt</p>
				<p className='font-light text-sm'>{strToCapital(prompt)}</p>
				<span className='absolute left-0 top-0 h-full w-1 bg-[var(--contrast-light)]' />
			</div>
			<div className='flex flex-wrap gap-2 mb-5'>
				{keywords?.split(',')?.map((keyword) => (
					<div
						key={crypto.randomUUID().toString()}
						className='flex items-center gap-1 w-fit py-1 px-2 border rounded-2xl border-[var(--contrast)] bg-[var(--contrast-light)]'>
						<p className='text-white text-sm'>{keyword}</p>
					</div>
				))}
			</div>
			<CraftModalAction
				file={file}
				title={title}
				prompt={prompt}
				keywords={keywords}
			/>
		</article>
	);
};

export default CraftModal;
