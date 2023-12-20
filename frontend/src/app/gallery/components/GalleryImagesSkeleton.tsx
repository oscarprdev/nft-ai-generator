const GalleryImagesSkeleton = () => {
	return (
		<section
			role='status'
			className='w-full flex flex-wrap items-center justify-center gap-5 p-10 max-w-[var(--max-width-app)]'>
			{Array.from({ length: 8 }).map((i) => (
				<article
					key={crypto.randomUUID().toString()}
					className='relative min-w-[250px] min-h-[380px] w-[15vw] h-[50vh] flex flex-col gap-2 p-3 rounded-3xl border animate-pulse'>
					<span className='w-full h-full bg-zinc-200 rounded-xl' />
					<div className='flex items-center justify-between w-full'>
						<div className='flex flex-col w-[40%] gap-2'>
							<span className='w-full h-5 bg-zinc-200 rounded-full' />
							<span className='w-full h-5 bg-zinc-200 rounded-full' />
						</div>
						<span className='w-[50%] h-16 bg-zinc-200 rounded-full' />
					</div>
				</article>
			))}
		</section>
	);
};

export default GalleryImagesSkeleton;
