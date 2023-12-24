import LoadIcon from '../../icons/LoadIcon';

const LoadingModal = () => {
	return (
		<article className='grid place-items-center gap-2 h-[30vh]'>
			<div className='flex flex-col gap-5 items-center'>
				<LoadIcon className='w-14 animate-spin text-[var(--contrast)]' />
				<p className='text-[var(--contrast)] font-light'>Generating AI art</p>
			</div>
		</article>
	);
};

export default LoadingModal;
