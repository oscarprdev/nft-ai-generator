import GalleryImage from './GalleryImage';
import { getImagesByFilterAction } from '../actions/get-images-by-filter.action';

interface GalleryImagesProps {
	filter?: string;
}

const GalleryImages = async ({ filter }: GalleryImagesProps) => {
	const images = await getImagesByFilterAction(filter);

	console.log(images);

	return (
		<section className='w-full flex flex-wrap items-center justify-center gap-5 p-10 max-w-[var(--max-width-app)]'>
			{images ? (
				images.map((img) => (
					<GalleryImage
						key={crypto.randomUUID().toString()}
						id={img.id}
						url={img.url}
						prompt={img.prompt}
						userName={img.user_name}
					/>
				))
			) : (
				<div className='grid place-items-center h-[35vh]'>
					<p className='text-zinc-500'>There is no data yet!</p>
				</div>
			)}
		</section>
	);
};

export default GalleryImages;
