'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const LINKS_NAME = {
	month: 'month',
	week: 'week',
	day: 'day',
};

const SelectImages = () => {
	const searchParams = useSearchParams();
	const top = searchParams.get('top') || LINKS_NAME.month;

	const selectedLinkStyle = () => {
		switch (top) {
			case LINKS_NAME.month:
				return 'transform translate-x-[0%] duration-300 w-[35%]';
			case LINKS_NAME.week:
				return 'transform translate-x-[118%] duration-300 w-[30%]';
			case LINKS_NAME.day:
				return 'transform translate-x-[270%] duration-300 w-[25%]';
			default:
				return '';
		}
	};

	return (
		<div className='intersection-animation absolute top-[-2rem] left-[34.5%] z-10 rounded-full bg-gradient-to-tl from-[var(--card-gray)] to-[var(--card-gray-light)]'>
			<ul className='relative flex items-center gap-5 px-5 py-5'>
				<span
					className={`${selectedLinkStyle()} absolute left-[3%] transform z-5 h-[70%] rounded-full bg-gradient-to-tl from-[var(--contrast)] to-[var(--contrast-light)]`}
				/>
				<li className='z-10'>
					<Link
						href={`?top=${LINKS_NAME.month}`}
						scroll={false}>
						<p className={`${LINKS_NAME.month.includes(top) ? 'text-zinc-800' : 'text-white'}`}>Top monthly</p>
					</Link>
				</li>
				<li className='z-10'>
					<Link
						href={`?top=${LINKS_NAME.week}`}
						scroll={false}>
						<p className={`${LINKS_NAME.week.includes(top) ? 'text-zinc-800' : 'text-white'}`}>Top weekly</p>
					</Link>
				</li>
				<li className='z-10'>
					<Link
						href={`?top=${LINKS_NAME.day}`}
						scroll={false}>
						<p className={`${LINKS_NAME.day.includes(top.substring(0, top.length - 1)) ? 'text-zinc-800' : 'text-white'}`}>Top daily</p>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default SelectImages;
