import Image from 'next/image';

interface ImageProps {
	className: string;
	src: string;
	alt: string;
	rounded?: boolean;
	cover?: boolean;
}

const ImageItem = ({ className, src, alt, rounded, cover }: ImageProps) => {
	return (
		<figure className={`${className} ${rounded && 'rounded-xl'} h-full w-full overflow-hidden`}>
			<Image
				src={src}
				alt={alt}
				className={`w-full h-full ${cover && 'object-cover'}`}
				width={100}
				height={100}
				loading='lazy'
			/>
		</figure>
	);
};

export default ImageItem;
