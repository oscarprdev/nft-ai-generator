import React from 'react';
import ImageItem from '../../common/ImageItem';
import SelectImages from './SelectImages';
import Button from '../../common/Button';

const ExploringImages = () => {
	return (
		<section className='w-full flex flex-col items-center px-12 py-5 mt-20 h-screen'>
			<p className='z-10 small-intersection-animation text-4xl font-bold text-center'>
				Explore the best generative <br /> NFT images
			</p>
			<div className='relative grid place-items-center exploring-grid w-full h-[70vh] gap-5 mt-16'>
				<SelectImages />
				<ImageItem
					className='small-intersection-animation exploring-image-1 opacity-0 slide-up-animation animation-delay-200'
					src={'/image-9.webp'}
					alt='exploring image'
					rounded
					cover
					prompt='An inspiring lady donning traditional African voodoo mask'
				/>
				<ImageItem
					className='small-intersection-animation exploring-image-2 opacity-0 slide-up-animation animation-delay-400'
					src={'/image-8.webp'}
					alt='exploring image'
					rounded
					cover
					prompt='A mustang muscle cat in a horror comic style poster'
				/>
				<ImageItem
					className='small-intersection-animation exploring-image-3 opacity-0 slide-up-animation animation-delay-400'
					src={'/image-10.webp'}
					alt='exploring image'
					rounded
					cover
					prompt='Epic view of a girl clan in ultraviolet threads'
				/>
				<ImageItem
					className='small-intersection-animation exploring-image-4 opacity-0 slide-up-animation animation-delay-200'
					src={'/image-7.webp'}
					alt='exploring image'
					rounded
					cover
					prompt='Cat dressed in the costume of "the punisher"'
				/>
			</div>
			<div className='flex items-center justify-between w-full mt-5 gap-5'>
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
