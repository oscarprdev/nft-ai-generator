import ImageItem from '../../components/ImageItem';

interface MarqueeRowProps {
	images: string[];
	second?: boolean;
}

const MarqueeRow = ({ images, second }: MarqueeRowProps) => {
	return (
		<div className={`relative flex w-full ml-5 items-center ${second && 'mt-[-6rem]'}`}>
			<div className='flex w-full items-center marquee1-animation overflow-hidden'>
				{images.map((img, i) => (
					<ImageItem
						key={crypto.randomUUID().toString()}
						src={img}
						alt='gallery image'
						className={`ml-5 odd:mt-24 border-[0.3rem] opacity-60 grayscale hover:grayscale-0 hover:opacity-100 hover:border-[var(--contrast)] duration-500`}
						cover
						rounded
					/>
				))}
			</div>

			<div className='absolute top-0 flex w-full items-center marquee2-animation overflow-hidden'>
				{images.map((img, i) => (
					<ImageItem
						key={crypto.randomUUID().toString()}
						src={img}
						alt='gallery image'
						className={`ml-5 odd:mt-24 border-[0.3rem] opacity-60 grayscale hover:grayscale-0 hover:opacity-100 hover:border-[var(--contrast)] duration-500`}
						cover
						rounded
					/>
				))}
			</div>
		</div>
	);
};

export default MarqueeRow;
