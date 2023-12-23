'use server';

import Image from 'next/image';
import UploadImageBtn from './UploadImageBtn';

interface ImageGeneratedProps {
	file: string;
}

const ImageGenerated = async ({ file }: ImageGeneratedProps) => {
	return (
		<div className='flex flex-col w-full items-center gap-5'>
			<Image
				src={`/${file}`}
				alt='image generated'
				width={250}
				height={250}
			/>
			{/* <UploadImageBtn file={file} /> */}
		</div>
	);
};

export default ImageGenerated;
