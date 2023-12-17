import ImageItem from '../../common/ImageItem';
import SelectImages from './SelectImages';
import Button from '../../common/Button';
import { APP_API_URL } from '@/constants';
import { TopImagesInfo, TopImagesItem } from '@/app/api/home/exploring-images/[top]/types';

interface ExploringImagesProps {
	top?: string;
}

const DEFAULT_TOP_KIND: keyof TopImagesInfo = 'month';

const ExploringImages = async ({ top }: ExploringImagesProps) => {
	const topKind = top || DEFAULT_TOP_KIND;

	const exploringImagesApiResponse = await fetch(`${APP_API_URL}/api/home/exploring-images/${topKind}`);
	const exploringInfo: TopImagesItem[] = await exploringImagesApiResponse.json();

	const cardDelay = (i: number) => {
		switch (i) {
			case 1 || 4:
				return 'animation-delay-200';
			case 2 || 3:
				return 'animation-delay-400';
			default:
				return '';
		}
	};

	return (
		<section className='w-full flex flex-col items-center px-12 py-5 mt-20'>
			<p className='z-10 small-intersection-animation text-4xl font-bold text-center'>
				Explore the best generative <br /> NFT images
			</p>
			<div className='relative grid place-items-center exploring-grid w-full h-[70vh] gap-5 mt-16'>
				<SelectImages />
				{exploringInfo &&
					exploringInfo.map((info, i) => (
						<ImageItem
							key={crypto.randomUUID().toString()}
							className={`small-intersection-animation exploring-image-${i + 1} opacity-0 slide-up-animation ${cardDelay(i + 1)}`}
							src={info.image}
							alt={info.alt}
							rounded
							cover
							prompt={info.prompt}
						/>
					))}
			</div>
			<div className='small-intersection-animation flex items-center justify-between w-full mt-5 gap-5'>
				<p className=''>
					We take a pride in the work created on our platform. Showcase the top daily <br />
					generative image for your discover
				</p>
				<Button
					secondary
					content='Start for free'
				/>
			</div>
		</section>
	);
};

export default ExploringImages;
