import { APP_API_URL } from '@/constants';
import Button from '../../components/Button';
import CheckIcon from '../../components/icons/CheckIcon';
import XIcon from '../../components/icons/XIcon';
import { PurchasingInfo } from '@/app/api/home/purchasing/[plan]/types';

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

const PurchasingCard = async ({ plan }: PurchasingCardProps) => {
	const cardColorByPlan = () => (plan === PlanEnum.standard ? '--contrast' : '--card-gray');
	const cardColorLightByPlan = () => (plan === PlanEnum.standard ? '--contrast-light' : '--card-gray-light');

	const purchasingApiResponse = await fetch(`${APP_API_URL}/api/home/purchasing/${plan}`);
	const purchasingInfo: PurchasingInfo = await purchasingApiResponse.json();

	return (
		<article className='small-intersection-animation opacity-0 slide-up-animation flex flex-col items-center justify-between gap-8 flex-grow-[1] w-full h-full'>
			{purchasingInfo && (
				<div
					className={`flex flex-col w-full rounded-xl gap-2 p-5 shadow-md text-white bg-gradient-to-tl from-[var(${cardColorByPlan()})] to-[var(${cardColorLightByPlan()})]`}>
					<p className='text-xl'>{purchasingInfo.title?.text} plan</p>
					<div className='flex items-center gap-3'>
						<p className='text-xl'>${purchasingInfo.pricing?.text}</p>
						<p className='text-sm'>/month</p>
					</div>
					<p>{purchasingInfo.initial?.text}</p>
				</div>
			)}
			<ul className='flex flex-col w-full gap-3 px-2'>
				<li className='flex items-center gap-2'>
					{purchasingInfo.credits?.ok ? <CheckIcon className='w-5 text-green-500' /> : <XIcon className='w-5 text-red-500' />}
					<p className='text-sm'>{purchasingInfo.credits?.text}</p>
				</li>
				<li className='flex items-center gap-2'>
					{purchasingInfo.access?.ok ? <CheckIcon className='w-5 text-green-500' /> : <XIcon className='w-5 text-red-500' />}
					<p className='text-sm'>{purchasingInfo.access?.text}</p>
				</li>
				<li className='flex items-center gap-2'>
					{purchasingInfo.prompts?.ok ? <CheckIcon className='w-5 text-green-500' /> : <XIcon className='w-5 text-red-500' />}
					<p className='text-sm'>{purchasingInfo.prompts?.text}</p>
				</li>
				<li className='flex items-center gap-2'>
					{purchasingInfo.creation?.ok ? <CheckIcon className='w-5 text-green-500' /> : <XIcon className='w-5 text-red-500' />}
					<p className='text-sm'>{purchasingInfo.creation?.text}</p>
				</li>
				<li className='flex items-center gap-2'>
					{purchasingInfo.sell?.ok ? <CheckIcon className='w-5 text-green-500' /> : <XIcon className='w-5 text-red-500' />}
					<p className='text-sm'>{purchasingInfo.sell?.text}</p>
				</li>
			</ul>
			<div className='flex justify-center w-50'>
				<Button
					secondary
					content={`Subscribe ${plan} plan`}
				/>
			</div>
		</article>
	);
};

export default PurchasingCard;
