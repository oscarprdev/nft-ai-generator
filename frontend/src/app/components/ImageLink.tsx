import Image from 'next/image';
import Link from 'next/link';

interface ImageLinkProps {
	id: string;
	url: string;
	prompt?: string;
}

const ImageLink = ({ id, url, prompt }: ImageLinkProps) => {
	return (
		<Link
			href={`/gallery/${id}`}
			className='cursor-pointer rounded-xl relative h-full w-full overflow-hidden'>
			<Image
				src={url}
				alt='gallery image'
				className='w-full h-full object-cover'
				width={100}
				height={100}
				loading='lazy'
			/>
			{prompt && (
				<div className='absolute bg-blur p-3 z-10 bottom-5 w-[80%] left-[10%] rounded-full grid place-items-center'>
					<p className='text-white text-sm text-center'>{prompt}</p>
				</div>
			)}
		</Link>
	);
};

export default ImageLink;
