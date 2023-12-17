import { APP_API_URL } from '@/constants';
import MarqueeRow from './MarqueeRow';

const HomeGallery = async () => {
	const galleryApiResponse = await fetch(`${APP_API_URL}/api/home/gallery`);
	const galleryImages: string[] = await galleryApiResponse.json();

	return (
		<section className='relative w-screen h-[80vh] flex flex-col gap-5 mt-5 opacity-0 slide-up-animation overflow-hidden'>
			<span className='absolute top-0 left-0 w-full h-full z-10 shadow-marquee pointer-events-none' />
			<MarqueeRow images={galleryImages} />
			<MarqueeRow
				images={galleryImages}
				second
			/>
		</section>
	);
};

export default HomeGallery;
