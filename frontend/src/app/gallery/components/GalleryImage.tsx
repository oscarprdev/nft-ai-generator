import HeaderImage from './HeaderImage';
import FooterImage from './FooterImage';
import ButtonLink from '@/app/components/ButtonLink';
import ImageLink from '@/app/components/ImageLink';

interface GalleryImageProps {
	url: string;
	prompt: string;
	userName: string;
	id: string;
}

const GalleryImage = ({ url, prompt, userName, id }: GalleryImageProps) => {
	return (
		<article className='relative min-w-[250px] min-h-[380px] w-[15vw] h-[50vh] flex flex-col gap-2 p-3 rounded-3xl border'>
			<HeaderImage />
			<ImageLink
				url={url}
				id={id}
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
