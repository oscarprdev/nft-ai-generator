import { GalleryImagesResponse } from '@/app/api/gallery/images/types';
import { APP_API_URL } from '@/constants';
import GalleryImage from './GalleryImage';

interface GalleryImagesProps {
	filter?: string;
}

const GalleryImages = async ({ filter }: GalleryImagesProps) => {
	const imagesApiResponse = await fetch(`${APP_API_URL}/api/gallery/images?filter=${filter || 'all'}`, { cache: 'no-cache' });
	const imagesJsonResponse: GalleryImagesResponse = await imagesApiResponse.json();

	return (
		<section className='w-full flex flex-wrap items-center justify-center gap-5 p-10 max-w-[var(--max-width-app)]'>
			{imagesJsonResponse.images.map((img) => (
				<GalleryImage
					key={crypto.randomUUID().toString()}
					id={img.id}
					url={img.url}
					prompt={img.prompt}
					userName={img.user_name}
				/>
			))}
		</section>
	);
};

export default GalleryImages;
