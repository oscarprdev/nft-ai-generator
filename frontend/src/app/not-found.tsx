import Link from 'next/link';
import ButtonLink from './ui/common/ButtonLink';

export default function NotFound() {
	return (
		<section className='w-full h-[62vh] grid place-items-center gap-1'>
			<div className='flex flex-col items-center gap-5'>
				<h2 className='text-6xl font-bold text-zinc-500'>Oh No! Error 404</h2>
				<p className='text-xl text-zinc-400'>Come back to the homepage</p>
				<div>
					<ButtonLink
						primary
						content='Home'
						href='/'
					/>
				</div>
			</div>
		</section>
	);
}
