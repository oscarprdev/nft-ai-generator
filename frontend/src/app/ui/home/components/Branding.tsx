import ImageItem from '../../common/ImageItem';

const Branding = () => {
	return (
		<section className='intersection-animation flex items-center justify-between w-full h-[20vh] px-12 mb-10'>
			<p className='w-[50%] text-xl'>
				Powered by innovation and driven by a passion for progress, <span className='text-[var(--contrast)] font-bold'>Creative.ai</span> is
				supported by a team of dedicated experts
			</p>
			<div className='flex items-center gap-10 '>
				<ImageItem
					className='w-[11vw]'
					src='/logos/cloudflare.png'
					alt='google logo'
				/>
				<ImageItem
					className='w-[11vw]'
					src='/logos/ethereum.png'
					alt='google logo'
				/>
			</div>
		</section>
	);
};

export default Branding;
