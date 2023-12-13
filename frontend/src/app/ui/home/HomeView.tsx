import React from 'react';
import Hero from './components/Hero';
import Branding from './components/Branding';
import Features from './components/Features';

const HomeView = () => {
	return (
		<section className='flex flex-col items-center w-full max-w-[var(--max-width-app)]'>
			<Hero />
			<Branding />
			<Features />
			<Branding />
		</section>
	);
};

export default HomeView;
