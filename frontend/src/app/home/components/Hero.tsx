import { APP_API_URL, PUBLIC_R2_URL } from '@/constants';
import ImageItem from '../../components/ImageItem';

const Hero = async () => {
	const heroApiResponse = await fetch(`${APP_API_URL}/api/home/hero`);
	const heroImages: string[] = await heroApiResponse.json();

	const cardDelay = (i: number) => {
		switch (i) {
			case 2:
				return 'animation-delay-200';
			case 3:
				return 'animation-delay-400';
			case 4:
				return 'animation-delay-600';
			case 5:
				return 'animation-delay-800';
			default:
				return '';
		}
	};

	return (
		<section className='flex flex-col items-center w-full gap-5'>
			<div className='flex flex-col items-center gap-5'>
				<h1 className='text-6xl text-center font-bold'>
					Generate your ideas into <br /> stunning <span className='italic text-[var(--contrast)]'>NFT</span> visuals
				</h1>
			</div>
			<div className='grid place-items-center hero-grid w-full h-[70vh] gap-5'>
				{heroImages.map((img, i) => (
					<ImageItem
						key={crypto.randomUUID().toString()}
						className={`hero-image-${i + 1} opacity-0 shadow-md slide-up-animation ${cardDelay(i + 1)}`}
						src={`${PUBLIC_R2_URL}/${img}`}
						alt='hero image'
						rounded
						cover
					/>
				))}
			</div>
			<p className='text-zinc-400 text-lg'>Art created by AI</p>
		</section>
	);
};

export default Hero;
