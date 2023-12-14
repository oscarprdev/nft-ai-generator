import ImageItem from '../../common/ImageItem';

const Hero = () => {
	return (
		<section className='flex flex-col items-center w-full gap-5'>
			<div className='flex flex-col items-center gap-5'>
				<h1 className='text-6xl text-center font-bold'>
					Generate your ideas into <br /> stunning <span className='italic text-[var(--contrast)]'>NFT</span> visuals
				</h1>
			</div>
			<div className='grid place-items-center hero-grid h-[70vh] gap-5'>
				<ImageItem
					className='hero-image-1 opacity-0 slide-up-animation'
					src={'/image-4.webp'}
					alt='hero image'
					rounded
					cover
				/>
				<ImageItem
					className='hero-image-2 opacity-0 slide-up-animation animation-delay-200'
					src={'/image-2.webp'}
					alt='hero image'
					rounded
					cover
				/>
				<ImageItem
					className='hero-image-3 opacity-0 slide-up-animation animation-delay-400'
					src={'/image-5.webp'}
					alt='hero image'
					rounded
					cover
				/>
				<ImageItem
					className='hero-image-4 opacity-0 slide-up-animation animation-delay-600'
					src={'/image-1.webp'}
					alt='hero image'
					rounded
					cover
				/>
				<ImageItem
					className='hero-image-5 opacity-0 slide-up-animation animation-delay-800'
					src={'/image-3.webp'}
					alt='hero image'
					rounded
					cover
				/>
			</div>
			<p className='text-zinc-400 text-lg'>NFT Art created by AI</p>
		</section>
	);
};

export default Hero;
