import Button from '../../common/Button';
import CheckIcon from '../../common/icons/CheckIcon';
import XIcon from '../../common/icons/XIcon';

enum PlanEnum {
	free = 'free',
	standard = 'standard',
	pro = 'pro',
}

export const PlanKinds = {
	free: 'free' as PlanEnum.free,
	standard: 'standard' as PlanEnum.standard,
	pro: 'pro' as PlanEnum.pro,
};

interface PurchasingCardProps {
	plan: PlanEnum.free | PlanEnum.standard | PlanEnum.pro;
}

const PurchasingCard = ({ plan }: PurchasingCardProps) => {
	const colorByPlan = () => (plan === PlanEnum.standard ? '--contrast' : '--card-gray');
	const colorLightByPlan = () => (plan === PlanEnum.standard ? '--contrast-light' : '--card-gray-light');

	return (
		<article className='small-intersection-animation opacity-0 slide-up-animation flex flex-col items-center justify-between gap-8 flex-grow-[1] w-full h-full'>
			<div
				className={`flex flex-col w-full rounded-xl gap-2 p-5 shadow-md text-white bg-gradient-to-tl from-[var(${colorByPlan()})] to-[var(${colorLightByPlan()})]`}>
				<p className='text-xl'>${plan === PlanEnum.free ? 'Free' : plan === PlanEnum.standard ? 'Standard' : 'Pro'} plan</p>
				<div className='flex items-center gap-3'>
					<p className='text-xl'>${plan === PlanEnum.free ? '0' : plan === PlanEnum.standard ? '10' : '20'}</p>
					<p className='text-sm'>/month</p>
				</div>
				{plan === PlanEnum.free && <p>Play generating AI art for free and see members images</p>}
				{plan === PlanEnum.standard && <p>Build NFT art using AI generative images in a simple and enjoyable way</p>}
				{plan === PlanEnum.pro && <p>Build NFT art using AI generative images and earn money with them</p>}
			</div>
			<ul className='flex flex-col w-full gap-3 px-2'>
				<li className='flex items-center gap-2'>
					<CheckIcon className='w-5 text-green-500' />
					<p className='text-sm'>
						Limit generated images: ({plan === PlanEnum.free ? '100' : plan === PlanEnum.standard ? '500' : '800'} credits /month)
					</p>
				</li>
				<li className='flex items-center gap-2'>
					<CheckIcon className='w-5 text-green-500' />
					<p className='text-sm'>Access to members gallery</p>
				</li>
				<li className='flex items-center gap-2'>
					<CheckIcon className='w-5 text-green-500' />
					<p className='text-sm'>
						{plan === PlanEnum.free ? 'Basic prompt' : plan === PlanEnum.standard ? 'Advanced prompt' : 'Make your own'} tags
					</p>
				</li>
				<li className='flex items-center gap-2'>
					{plan === PlanEnum.free ? (
						<XIcon className='w-5 text-red-500' />
					) : plan === PlanEnum.standard ? (
						<CheckIcon className='w-5 text-green-500' />
					) : (
						<CheckIcon className='w-5 text-green-500' />
					)}
					<p className='text-sm'>Create NFT from AI art</p>
				</li>
				<li className='flex items-center gap-2'>
					{plan === PlanEnum.free ? (
						<XIcon className='w-5 text-red-500' />
					) : plan === PlanEnum.standard ? (
						<XIcon className='w-5 text-red-500' />
					) : (
						<CheckIcon className='w-5 text-green-500' />
					)}
					<p className='text-sm'>Share and sell your NFTs</p>
				</li>
			</ul>
			<div className='flex justify-center w-full'>
				<Button
					secondary
					content={`Subscribe ${plan} plan`}
				/>
			</div>
		</article>
	);
};

export default PurchasingCard;
