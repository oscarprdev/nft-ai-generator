import ImageItem from '@/app/components/ImageItem';
import HeaderImage from './HeaderImage';
import FooterImage from './FooterImage';
import ButtonLink from '@/app/components/ButtonLink';

interface GalleryImageProps {
	url: string;
	prompt: string;
	userName: string;
	id: string;
}

const GalleryImage = ({ url, prompt, userName, id }: GalleryImageProps) => {
	return (
		<article className='relative min-w-[250px] min-h-[380px] w-[15vw] h-[50vh] flex flex-col gap-2 cursor-pointer p-3 rounded-xl border'>
			<HeaderImage />
			<ImageItem
				src={url}
				alt='image'
				className='w-full'
				cover
				rounded
				prompt={prompt}
			/>
			<FooterImage
				userName={userName}
				title={'Randome title image'}>
				<ButtonLink
					href={`/gallery?buy=${id}`}
					secondary
					content='Buy now'
				/>
			</FooterImage>
		</article>
	);
};

export default GalleryImage;
