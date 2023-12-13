import Image from 'next/image';

interface ImageProps {
	className: string;
	src: string;
	alt: string;
	rounded?: boolean;
	cover?: boolean;
	prompt?: string;
}

const ImageItem = ({ className, src, alt, rounded, cover, prompt }: ImageProps) => {
	return (
		<figure className={`${className} ${rounded && 'rounded-xl'} relative shadow-md h-full w-full overflow-hidden`}>
			<Image
				src={src}
				alt={alt}
				className={`w-full h-full ${cover && 'object-cover'}`}
				width={100}
				height={100}
				loading='lazy'
			/>
			{prompt && (
				<div className='absolute bg-blur p-3 z-10 bottom-5 w-[80%] left-[10%] rounded-full grid place-items-center'>
					<p className='text-white text-sm text-center'>{prompt}</p>
				</div>
			)}
		</figure>
	);
};

export default ImageItem;
