import React from 'react';
import Hero from './components/Hero';
import Branding from './components/Branding';
import Features from './components/Features';
import ExploringImages from './components/ExploringImages';
import Purchasing from './components/Purchasing';
import Questions from './components/Questions';

const HomeView = () => {
	return (
		<section className='flex flex-col items-center w-full max-w-[var(--max-width-app)]'>
			<Hero />
			<Branding />
			<Features />
			<ExploringImages />
			<Purchasing />
			<Questions />
			<Branding />
		</section>
	);
};

export default HomeView;
