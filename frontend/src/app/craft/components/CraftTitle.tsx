import AsteriskIcon from '@/app/components/icons/AsteriskIcon';

const CraftTitle = async () => {
	return (
		<article className='relative flex px-10 gap-2 text-center'>
			<p className='font-bold text-5xl'>
				Bring your <br /> ideas to life
			</p>
			<AsteriskIcon className='absolute right-5 bottom-6 w-5 text-[var(--contrast)]' />
		</article>
	);
};

export default CraftTitle;
