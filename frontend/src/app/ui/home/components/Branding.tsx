import { APP_API_URL } from '@/constants';
import ImageItem from '../../common/ImageItem';
import { BrandingInfo } from '@/app/api/home/branding/types';

const Branding = async () => {
	const brandingApiResponse = await fetch(`${APP_API_URL}/api/home/branding`);
	const brandingImages: BrandingInfo[] = await brandingApiResponse.json();

	return (
		<section className='intersection-animation flex items-center justify-between w-full h-[20vh] px-12 mb-10'>
			<p className='w-[50%] text-xl'>
				Powered by innovation and driven by a passion for progress, <span className='text-[var(--contrast)] font-bold'>Creative.ai</span> is
				supported by a team of dedicated experts.
			</p>
			<div className='flex items-center gap-10 '>
				{brandingImages.map((data) => (
					<ImageItem
						key={crypto.randomUUID().toString()}
						className='w-[11vw]'
						src={data.image}
						alt={data.alt}
					/>
				))}
			</div>
		</section>
	);
};

export default Branding;
