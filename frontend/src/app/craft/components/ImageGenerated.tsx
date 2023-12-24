'use client';

import Image from 'next/image';
import UploadImageBtn from './UploadImageBtn';
import { useFormStatus } from 'react-dom';
import ImageIcon from '../../components/icons/ImageIcon';
import ThunderIcon from '@/app/components/icons/ThunderIcon';

interface ImageGeneratedProps {
	file?: string;
}

const ImageGenerated = ({ file }: ImageGeneratedProps) => {
	const { pending } = useFormStatus();

	return (
		<figure className='flex flex-col w-full items-center'>
			{file ? (
				<Image
					src={`/${file}`}
					alt='image generated'
					width={230}
					height={230}
					className='rounded-lg shadow-md'
					priority
				/>
			) : pending ? (
				<span className='grid place-items-center w-[230px] h-[230px] bg-zinc-200 rounded-lg border-[0.2rem] border-zinc-300 animate-pulse'>
					<ImageIcon className='w-12 text-zinc-300' />
				</span>
			) : (
				<span className='grid place-items-center w-[230px] h-[230px]'>
					<div className='flex flex-col items-center gap-2'>
						<ThunderIcon className='w-12 fill-[var(--contrast-light)]' />
						<p className='text-[var(--contrast)] font-bold'>Craft your AI art</p>
					</div>
				</span>
			)}
		</figure>
	);
};

export default ImageGenerated;
