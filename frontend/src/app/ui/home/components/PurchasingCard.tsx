import React from 'react';
import Button from '../../common/Button';

enum PlanEnum {
	basic = 'basic',
	standard = 'standard',
	pro = 'pro',
}

export const PlanKinds = {
	basic: 'basic' as PlanEnum.basic,
	standard: 'standard' as PlanEnum.standard,
	pro: 'pro' as PlanEnum.pro,
};

interface PurchasingCardProps {
	plan: PlanEnum.basic | PlanEnum.standard | PlanEnum.pro;
}

const PurchasingCard = ({ plan }: PurchasingCardProps) => {
	const colorByPlan = () => (plan === PlanEnum.standard ? '--contrast' : '--card-gray');
	const colorLightByPlan = () => (plan === PlanEnum.standard ? '--contrast-light' : '--card-gray-light');

	return (
		<article className='small-intersection-animation opacity-0 slide-up-animation flex flex-col items-center gap-8 flex-grow-[1] w-full h-full'>
			<div
				className={`flex flex-col w-full rounded-xl gap-2 p-5 shadow-md text-white bg-gradient-to-tl from-[var(${colorByPlan()})] to-[var(${colorLightByPlan()})]`}>
				<p className='text-xl'>Basic plan</p>
				<div className='flex items-center gap-3'>
					{plan === PlanEnum.basic && <p className='text-xl'>$5</p>}
					{plan === PlanEnum.standard && <p className='text-xl'>$10</p>}
					{plan === PlanEnum.pro && <p className='text-xl'>$20</p>}
					<p className='text-sm'>/month</p>
				</div>
				<p>Build NFT art using AI generative images in a simple and enjoyable way</p>
			</div>
			<ul className='flex flex-col w-full gap-3'>
				<li className='flex items-center gap-2'>
					<span className='w-2 h-2 bg-zinc-400 rounded-full' />
					{plan === PlanEnum.basic && <p className='text-sm'>Limited generate images (100 credits / month)</p>}
					{plan === PlanEnum.standard && <p className='text-sm'>Limited generate images (500 credits / month)</p>}
					{plan === PlanEnum.pro && <p className='text-sm'>Limited generate images (800 credits / month)</p>}
				</li>
				<li className='flex items-center gap-2'>
					<span className='w-2 h-2 bg-zinc-400 rounded-full' />
					<p className='text-sm'>Access to members gallery</p>
				</li>
				<li className='flex items-center gap-2'>
					<span className='w-2 h-2 bg-zinc-400 rounded-full' />
					{plan === PlanEnum.basic && <p className='text-sm'>Basic prompt tags</p>}
					{plan === PlanEnum.standard && <p className='text-sm'>Advanced prompt tags</p>}
					{plan === PlanEnum.pro && <p className='text-sm'>Make your own tags</p>}
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
