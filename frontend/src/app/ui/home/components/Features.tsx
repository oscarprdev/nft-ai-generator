import React from 'react';
import ThunderIcon from '../../common/icons/ThunderIcon';
import TextIcon from '../../common/icons/TextIcon';
import ImageIcon from '../../common/icons/ImageIcon';

const Features = () => {
	return (
		<section className='w-full flex flex-col items-center gap-10 py-5 px-12 h-screen'>
			<p className='text-4xl font-bold text-center'>
				Our cutting-edge features <br /> revolutionizing AI experience
			</p>
			<div className='w-full flex flex-col'>
				<div className='flex items-center gap-8'>
					<article className='feature-card-bg flex flex-col items-start gap-5 p-12 border border-black rounded-xl bg-gradient-to-tl from-[var(--background-shadow)] to-[var(--background-rgb)]'>
						<span className='p-2 rounded-xl bg-gradient-to-tl from-[var(--contrast)] to-[var(--contrast-light)]'>
							<ThunderIcon className='w-8 fill-white' />
						</span>
						<p className='text-3xl w-[85%]'>Lighting Fast. Just start with an idea and see how fast it evolves</p>
					</article>
					<article className='feature-card-bg flex flex-col items-start gap-5 p-12 border border-black rounded-xl'>
						<div className='flex items-center gap-1'>
							<span className='p-2 rounded-xl bg-gradient-to-tl from-[var(--contrast)] to-[var(--contrast-light)]'>
								<TextIcon className='w-8 text-white fill-none' />
							</span>
							<div className='flex items-center gap-1'>
								<span className='bg-[var(--contrast)] w-3 h-[0.1rem]' />
								<span className='bg-[var(--contrast)] w-3 h-[0.1rem]' />
							</div>
							<span className='p-2 rounded-xl bg-gradient-to-tl from-[var(--contrast)] to-[var(--contrast-light)]'>
								<ImageIcon className='w-8 text-white' />
							</span>
						</div>

						<p className='text-3xl w-[85%]'>Text to image. Imagine, ask, create, describe and generate</p>
					</article>
				</div>
			</div>
		</section>
	);
};

export default Features;
